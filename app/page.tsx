'use client';

import { useState } from 'react';
import FileUpload from '@/components/FileUpload';
import UserGuide from '@/components/UserGuide';
import { OfficerPreference, PositionPreference, OrgPreference, MatchingResult } from '@/lib/types';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleFilesUploaded = async (
    officerPrefs: OfficerPreference[],
    positionPrefs: PositionPreference[],
    orgPrefs: OrgPreference[]
  ) => {
    setLoading(true);
    setError(null);

    try {
      // Extract unique officers and positions
      const officers = officerPrefs.map(p => p.officerName);
      const positions = positionPrefs.map(p => p.positionName);

      // Validate that all current positions exist in the position list
      const positionSet = new Set(positions);
      const missingPositions: string[] = [];

      officerPrefs.forEach(officer => {
        if (!positionSet.has(officer.currentPosition)) {
          missingPositions.push(`${officer.officerName}'s current position "${officer.currentPosition}"`);
        }
      });

      if (missingPositions.length > 0) {
        setError(`The following current positions are not in the position list:\n${missingPositions.join('\n')}\n\nPlease ensure all current positions are included in the position_preferences.xlsx file.`);
        setLoading(false);
        return;
      }

      // Build preference dictionaries
      const officerPreferences: { [key: string]: string[] } = {};
      officerPrefs.forEach(p => {
        officerPreferences[p.officerName] = [
          p.preference1,
          p.preference2,
          p.preference3
        ].filter(Boolean);
      });

      const positionPreferences: { [key: string]: string[] } = {};
      positionPrefs.forEach(p => {
        positionPreferences[p.positionName] = [
          p.preference1,
          p.preference2,
          p.preference3
        ].filter(Boolean);
      });

      const originalPositions: { [key: string]: string } = {};
      officerPrefs.forEach(p => {
        originalPositions[p.officerName] = p.currentPosition;
      });

      const orgPreferences: { [key: string]: number } = {};
      orgPrefs.forEach(p => {
        const key = `${p.officerName},${p.positionName}`;
        orgPreferences[key] = p.bonus;
      });

      // Convert org preferences to the format expected by Python
      const orgPreferencesDict: { [key: string]: number } = {};
      Object.entries(orgPreferences).forEach(([key, value]) => {
        orgPreferencesDict[key] = value;
      });

      // Call API
      const response = await fetch('/api/match', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          officers,
          positions,
          officer_preferences: officerPreferences,
          position_preferences: positionPreferences,
          original_positions: originalPositions,
          org_preferences: orgPreferencesDict
        }),
      });

      const result: MatchingResult = await response.json();

      if (!result.success) {
        throw new Error(result.error || 'Matching failed');
      }

      // Store results in sessionStorage and navigate to results page
      sessionStorage.setItem('matchingResults', JSON.stringify(result));
      router.push('/results');

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Officer Rotation Matching
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Intelligent officer-position matching using advanced optimization algorithms
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Status Messages */}
        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4 shadow-md animate-in slide-in-from-top">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-red-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="flex-1">
                <h3 className="text-red-900 font-semibold mb-1">Error</h3>
                <p className="text-red-800 text-sm whitespace-pre-line">{error}</p>
              </div>
            </div>
          </div>
        )}

        {loading && (
          <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 shadow-md animate-pulse">
            <div className="flex items-center">
              <svg className="animate-spin w-6 h-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <div>
                <h3 className="text-blue-900 font-semibold">Processing</h3>
                <p className="text-blue-800 text-sm">Running matching algorithm...</p>
              </div>
            </div>
          </div>
        )}

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - File Upload (2/3 width) */}
          <div className="lg:col-span-2">
            <FileUpload onFilesUploaded={handleFilesUploaded} />
          </div>

          {/* Right Column - User Guide (1/3 width) */}
          <div className="lg:col-span-1">
            <UserGuide />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-white mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
          <p>Powered by Hungarian Algorithm • Built for PSD</p>
        </div>
      </div>
    </main>
  );
}
