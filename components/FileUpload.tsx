'use client';

import { useState } from 'react';
import { parseOfficerPreferences, parsePositionPreferences, parseOrgPreferences, validateOfficerPreferences, validatePositionPreferences } from '@/lib/excelParser';
import { OfficerPreference, PositionPreference, OrgPreference } from '@/lib/types';

interface FileUploadProps {
  onFilesUploaded: (
    officerPrefs: OfficerPreference[],
    positionPrefs: PositionPreference[],
    orgPrefs: OrgPreference[]
  ) => void;
}

export default function FileUpload({ onFilesUploaded }: FileUploadProps) {
  const [officerFile, setOfficerFile] = useState<File | null>(null);
  const [positionFile, setPositionFile] = useState<File | null>(null);
  const [orgFile, setOrgFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (type: 'officer' | 'position' | 'org', file: File | null) => {
    setErrors([]);
    
    switch (type) {
      case 'officer':
        setOfficerFile(file);
        break;
      case 'position':
        setPositionFile(file);
        break;
      case 'org':
        setOrgFile(file);
        break;
    }
  };

  const handleSubmit = async () => {
    if (!officerFile || !positionFile) {
      setErrors(['Please upload both officer and position preference files']);
      return;
    }

    setLoading(true);
    setErrors([]);

    try {
      // Parse files
      const officerPrefs = await parseOfficerPreferences(officerFile);
      const positionPrefs = await parsePositionPreferences(positionFile);
      const orgPrefs = orgFile ? await parseOrgPreferences(orgFile) : [];

      // Validate
      const officerErrors = validateOfficerPreferences(officerPrefs);
      const positionErrors = validatePositionPreferences(positionPrefs);

      if (officerErrors.length > 0 || positionErrors.length > 0) {
        setErrors([...officerErrors, ...positionErrors]);
        setLoading(false);
        return;
      }

      // Pass to parent
      onFilesUploaded(officerPrefs, positionPrefs, orgPrefs);
      
    } catch (error) {
      setErrors([`Error parsing files: ${error}`]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* File Upload Cards */}
      <div className="grid gap-4">
        {/* Officer Preferences Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900">Officer Preferences</h3>
                <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded">REQUIRED</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Upload officer names, current positions, and top 3 preferences</p>
              <input
                type="file"
                accept=".xlsx,.xls"
                onChange={(e) => handleFileChange('officer', e.target.files?.[0] || null)}
                className="hidden"
                id="officer-file"
              />
              <label
                htmlFor="officer-file"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border-2 border-green-200 text-green-700 rounded-lg hover:bg-green-100 cursor-pointer transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span className="font-medium">Choose File</span>
              </label>
              {officerFile && (
                <div className="mt-2 flex items-center gap-2 text-sm text-green-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{officerFile.name}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Position Preferences Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900">Position Preferences</h3>
                <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded">REQUIRED</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Upload position names and their top 3 preferred officers</p>
              <input
                type="file"
                accept=".xlsx,.xls"
                onChange={(e) => handleFileChange('position', e.target.files?.[0] || null)}
                className="hidden"
                id="position-file"
              />
              <label
                htmlFor="position-file"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border-2 border-blue-200 text-blue-700 rounded-lg hover:bg-blue-100 cursor-pointer transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span className="font-medium">Choose File</span>
              </label>
              {positionFile && (
                <div className="mt-2 flex items-center gap-2 text-sm text-blue-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{positionFile.name}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Organization Preferences Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900">Organization Preferences</h3>
                <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-0.5 rounded">OPTIONAL</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Upload organizational bonus/penalty adjustments (-3 to +3)</p>
              <input
                type="file"
                accept=".xlsx,.xls"
                onChange={(e) => handleFileChange('org', e.target.files?.[0] || null)}
                className="hidden"
                id="org-file"
              />
              <label
                htmlFor="org-file"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border-2 border-purple-200 text-purple-700 rounded-lg hover:bg-purple-100 cursor-pointer transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span className="font-medium">Choose File</span>
              </label>
              {orgFile && (
                <div className="mt-2 flex items-center gap-2 text-sm text-purple-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{orgFile.name}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Errors */}
      {errors.length > 0 && (
        <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4 shadow-md">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-bold text-red-800 mb-2">Please fix the following errors:</p>
              <ul className="space-y-1 text-sm text-red-700">
                {errors.map((error, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="flex-shrink-0">•</span>
                    <span>{error}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={loading || !officerFile || !positionFile}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] disabled:transform-none"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Run Matching Algorithm
          </span>
        )}
      </button>

      {/* Download Templates */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="font-bold text-gray-900">Need Templates?</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="/templates/officer_preferences.xlsx"
            download
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors text-sm font-medium text-gray-700"
          >
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            Officer Template
          </a>
          <a
            href="/templates/position_preferences.xlsx"
            download
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors text-sm font-medium text-gray-700"
          >
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            Position Template
          </a>
          <a
            href="/templates/org_preferences.xlsx"
            download
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors text-sm font-medium text-gray-700"
          >
            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            Org Template
          </a>
        </div>
      </div>
    </div>
  );
}
