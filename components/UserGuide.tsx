'use client';

import { useState } from 'react';

export default function UserGuide() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-100 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📖</span>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-blue-900">
                How to Use This System - Quick Guide
              </h3>
              <p className="text-sm text-blue-700">
                Click to learn about Excel templates, scoring system, and data validation
              </p>
            </div>
          </div>
          <svg
            className={`w-6 h-6 text-blue-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="mt-4 bg-white border border-gray-200 rounded-lg p-6 space-y-6">
          {/* Overview */}
          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-3">🎯 What This System Does</h4>
            <p className="text-gray-700 mb-2">
              This system uses the <strong>Hungarian Algorithm</strong> to find the optimal assignment of officers to positions based on:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Officer preferences (what positions officers want)</li>
              <li>Position preferences (what officers positions want)</li>
              <li>Organizational priorities (bonus/penalty adjustments)</li>
              <li>Rotation rules (officers cannot stay in current position)</li>
            </ul>
          </section>

          {/* Required Files */}
          <section className="border-t pt-6">
            <h4 className="text-xl font-bold text-gray-900 mb-3">📁 Required Excel Files</h4>
            
            <div className="space-y-4">
              {/* File 1 */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-semibold text-green-900 mb-2">1️⃣ officer_preferences.xlsx (Required)</h5>
                <p className="text-sm text-gray-700 mb-2">Lists all officers, their current positions, and their top 3 preferred positions.</p>
                <div className="bg-white rounded p-3 text-xs overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Officer Name</th>
                        <th className="text-left p-2">Current Position</th>
                        <th className="text-left p-2">Preference 1</th>
                        <th className="text-left p-2">Preference 2</th>
                        <th className="text-left p-2">Preference 3</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">John Tan</td>
                        <td className="p-2">Analyst (Data)</td>
                        <td className="p-2">Manager (Finance)</td>
                        <td className="p-2">Analyst (Policy)</td>
                        <td className="p-2">Manager (HR)</td>
                      </tr>
                      <tr>
                        <td className="p-2">Sarah Lee</td>
                        <td className="p-2">Manager (HR)</td>
                        <td className="p-2">Analyst (Data)</td>
                        <td className="p-2">Analyst (Policy)</td>
                        <td className="p-2">Manager (Finance)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-green-800 mt-2">
                  ⚠️ <strong>Important:</strong> Every &quot;Current Position&quot; must also appear in the position_preferences.xlsx file!
                </p>
              </div>

              {/* File 2 */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-semibold text-blue-900 mb-2">2️⃣ position_preferences.xlsx (Required)</h5>
                <p className="text-sm text-gray-700 mb-2">Lists all available positions and their top 3 preferred officers.</p>
                <div className="bg-white rounded p-3 text-xs overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Position Name</th>
                        <th className="text-left p-2">Preference 1</th>
                        <th className="text-left p-2">Preference 2</th>
                        <th className="text-left p-2">Preference 3</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">Manager (Finance)</td>
                        <td className="p-2">John Tan</td>
                        <td className="p-2">Sarah Lee</td>
                        <td className="p-2">David Lim</td>
                      </tr>
                      <tr>
                        <td className="p-2">Analyst (Policy)</td>
                        <td className="p-2">Sarah Lee</td>
                        <td className="p-2">John Tan</td>
                        <td className="p-2">Mary Ng</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-blue-800 mt-2">
                  💡 <strong>Tip:</strong> Include ALL positions here, including current positions of all officers!
                </p>
              </div>

              {/* File 3 */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h5 className="font-semibold text-purple-900 mb-2">3️⃣ org_preferences.xlsx (Optional)</h5>
                <p className="text-sm text-gray-700 mb-2">Organizational overrides to boost or penalize specific officer-position pairs.</p>
                <div className="bg-white rounded p-3 text-xs overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Officer Name</th>
                        <th className="text-left p-2">Position Name</th>
                        <th className="text-left p-2">Bonus</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">John Tan</td>
                        <td className="p-2">Manager (Finance)</td>
                        <td className="p-2">+2</td>
                      </tr>
                      <tr>
                        <td className="p-2">Sarah Lee</td>
                        <td className="p-2">Analyst (Policy)</td>
                        <td className="p-2">-3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-purple-800 mt-2">
                  📊 Bonus range: -3 (strong penalty) to +3 (strong bonus)
                </p>
              </div>
            </div>
          </section>

          {/* Scoring System */}
          <section className="border-t pt-6">
            <h4 className="text-xl font-bold text-gray-900 mb-3">🎯 How Scoring Works</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Preference Points</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>🥇 <strong>1st choice:</strong> 3 points</li>
                  <li>🥈 <strong>2nd choice:</strong> 2 points</li>
                  <li>🥉 <strong>3rd choice:</strong> 1 point</li>
                  <li>❌ <strong>Not listed:</strong> 0 points</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Special Rules</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>🔄 <strong>Rotation penalty:</strong> -99 points (current position)</li>
                  <li>🏢 <strong>Org bonus:</strong> -3 to +3 points</li>
                  <li>📊 <strong>Total score:</strong> Officer + Position + Org bonus</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded p-3">
              <p className="text-sm text-yellow-900">
                <strong>Example:</strong> If John wants Finance (1st choice = 3 pts) and Finance wants John (2nd choice = 2 pts), 
                with org bonus of +2, total score = 3 + 2 + 2 = <strong>7 points</strong>
              </p>
            </div>
          </section>

          {/* Validation Checklist */}
          <section className="border-t pt-6">
            <h4 className="text-xl font-bold text-gray-900 mb-3">✅ Data Validation Checklist</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <p className="text-sm text-gray-700">
                  <strong>No duplicate officer names</strong> in officer_preferences.xlsx
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <p className="text-sm text-gray-700">
                  <strong>No duplicate position names</strong> in position_preferences.xlsx
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <p className="text-sm text-gray-700">
                  <strong>All current positions exist</strong> in the position list
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <p className="text-sm text-gray-700">
                  <strong>All preference names match exactly</strong> (case-sensitive, no extra spaces)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <p className="text-sm text-gray-700">
                  <strong>Org bonus values</strong> are between -3 and +3
                </p>
              </div>
            </div>
          </section>

          {/* What Happens Next */}
          <section className="border-t pt-6">
            <h4 className="text-xl font-bold text-gray-900 mb-3">🚀 What Happens After Upload</h4>
            <ol className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="font-bold text-blue-600">1.</span>
                <span>System validates your Excel files for errors</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-blue-600">2.</span>
                <span>Hungarian algorithm calculates optimal assignments (maximizes total satisfaction)</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-blue-600">3.</span>
                <span>Results page shows assignments with satisfaction metrics</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-blue-600">4.</span>
                <span>Download results as Excel file for distribution</span>
              </li>
            </ol>
          </section>

          {/* Common Issues */}
          <section className="border-t pt-6">
            <h4 className="text-xl font-bold text-gray-900 mb-3">⚠️ Common Issues & Solutions</h4>
            <div className="space-y-3">
              <div className="bg-red-50 border border-red-200 rounded p-3">
                <p className="text-sm font-semibold text-red-900 mb-1">
                  Error: &quot;Current position not in position list&quot;
                </p>
                <p className="text-sm text-red-800">
                  <strong>Solution:</strong> Add the missing position to position_preferences.xlsx with its preferences.
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded p-3">
                <p className="text-sm font-semibold text-red-900 mb-1">
                  Error: &quot;Duplicate officer name&quot;
                </p>
                <p className="text-sm text-red-800">
                  <strong>Solution:</strong> Ensure each officer appears only once in officer_preferences.xlsx.
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded p-3">
                <p className="text-sm font-semibold text-red-900 mb-1">
                  Low satisfaction scores
                </p>
                <p className="text-sm text-red-800">
                  <strong>Solution:</strong> Review preferences - may indicate limited options or conflicting preferences.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
