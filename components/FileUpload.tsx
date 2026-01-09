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
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Upload Preference Files</h2>

        {/* Officer Preferences */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Officer Preferences <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={(e) => handleFileChange('officer', e.target.files?.[0] || null)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {officerFile && (
            <p className="text-sm text-green-600 mt-1">✓ {officerFile.name}</p>
          )}
        </div>

        {/* Position Preferences */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Position Preferences <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={(e) => handleFileChange('position', e.target.files?.[0] || null)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {positionFile && (
            <p className="text-sm text-green-600 mt-1">✓ {positionFile.name}</p>
          )}
        </div>

        {/* Organization Preferences */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Organization Preferences (Optional)
          </label>
          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={(e) => handleFileChange('org', e.target.files?.[0] || null)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {orgFile && (
            <p className="text-sm text-green-600 mt-1">✓ {orgFile.name}</p>
          )}
        </div>

        {/* Errors */}
        {errors.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded p-4 mb-4">
            <p className="font-medium text-red-800 mb-2">Please fix the following errors:</p>
            <ul className="list-disc list-inside text-sm text-red-700">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading || !officerFile || !positionFile}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : 'Run Matching'}
        </button>

        {/* Download Templates */}
        <div className="mt-6 pt-6 border-t">
          <p className="text-sm font-medium mb-2">Need templates?</p>
          <div className="flex gap-2">
            <a
              href="/templates/officer_preferences.xlsx"
              download
              className="text-sm text-blue-600 hover:underline"
            >
              Download Officer Template
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="/templates/position_preferences.xlsx"
              download
              className="text-sm text-blue-600 hover:underline"
            >
              Download Position Template
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="/templates/org_preferences.xlsx"
              download
              className="text-sm text-blue-600 hover:underline"
            >
              Download Org Template
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
