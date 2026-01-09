'use client';

import { useState } from 'react';
import FileUpload from '@/components/FileUpload';
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
      const positions = Array.from(new Set([
        ...positionPrefs.map(p => p.positionName),
        ...officerPrefs.map(p => p.currentPosition)
      ]));

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
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            PSD Officer Rotation Matching System
          </h1>
          <p className="text-gray-600">
            Upload preference files to generate optimal officer-position matches
          </p>
        </div>

        {error && (
          <div className="max-w-2xl mx-auto mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 font-medium">Error: {error}</p>
          </div>
        )}

        {loading && (
          <div className="max-w-2xl mx-auto mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 font-medium">Running matching algorithm...</p>
          </div>
        )}

        <FileUpload onFilesUploaded={handleFilesUploaded} />
      </div>
    </main>
  );
}
