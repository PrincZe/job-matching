'use client';

import { useState } from 'react';

export default function UserGuide() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01]"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-1">
                📚 Quick Start Guide
              </h3>
              <p className="text-blue-100 text-sm">
                Learn how to use the system, understand templates, and validate your data
              </p>
            </div>
          </div>
          <svg
            className={`w-7 h-7 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="mt-4 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden animate-in slide-in-from-top duration-300">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Complete User Guide</h2>
            <p className="text-gray-600 text-sm mt-1">Everything you need to know to use this system effectively</p>
          </div>
          <div className="p-6 space-y-8">
          {/* Overview */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900">What This System Does</h4>
            </div>
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
          <section className="border-t pt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Required Excel Files</h4>
            </div>
            
            <div className="space-y-4">
              {/* File 1 */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">REQUIRED</span>
                  <h5 className="font-bold text-green-900 text-lg">1️⃣ officer_preferences.xlsx</h5>
                </div>
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
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">REQUIRED</span>
                  <h5 className="font-bold text-blue-900 text-lg">2️⃣ position_preferences.xlsx</h5>
                </div>
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
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">OPTIONAL</span>
                  <h5 className="font-bold text-purple-900 text-lg">3️⃣ org_preferences.xlsx</h5>
                </div>
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
          <section className="border-t pt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900">How Scoring Works</h4>
            </div>
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
        </div>
      )}
    </div>
  );
}
