'use client';

export default function UserGuide() {
  return (
    <div className="sticky top-8">
      <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Quick Start Guide</h3>
              <p className="text-blue-100 text-xs">Essential information</p>
            </div>
          </div>
        </div>
        <div className="p-5 space-y-6 max-h-[calc(100vh-12rem)] overflow-y-auto">
          {/* Overview */}
          <section>
            <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-blue-600">⚡</span>
              What This Does
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Uses <strong>Hungarian Algorithm</strong> to optimally match officers to positions based on preferences, organizational priorities, and rotation rules.
            </p>
          </section>

          {/* Required Files */}
          <section className="border-t pt-6">
            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-green-600">📁</span>
              Required Files
            </h4>
            
            <div className="space-y-3">
              {/* File 1 */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">REQUIRED</span>
                  <h5 className="font-semibold text-green-900 text-xs">officer_preferences.xlsx</h5>
                </div>
                <p className="text-xs text-gray-600">Officers, current positions, and top 3 preferences</p>
              </div>

              {/* File 2 */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">REQUIRED</span>
                  <h5 className="font-semibold text-blue-900 text-xs">position_preferences.xlsx</h5>
                </div>
                <p className="text-xs text-gray-600">Positions and their top 3 preferred officers</p>
              </div>

              {/* File 3 */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-purple-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">OPTIONAL</span>
                  <h5 className="font-semibold text-purple-900 text-xs">org_preferences.xlsx</h5>
                </div>
                <p className="text-xs text-gray-600">Bonus/penalty adjustments (-3 to +3)</p>
              </div>
            </div>
          </section>

          {/* Scoring System */}
          <section className="border-t pt-6">
            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-orange-600">🎯</span>
              How Scoring Works
            </h4>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>🥇 1st choice:</span>
                <span className="font-semibold">3 points</span>
              </div>
              <div className="flex justify-between">
                <span>🥈 2nd choice:</span>
                <span className="font-semibold">2 points</span>
              </div>
              <div className="flex justify-between">
                <span>🥉 3rd choice:</span>
                <span className="font-semibold">1 point</span>
              </div>
              <div className="flex justify-between">
                <span>🔄 Current position:</span>
                <span className="font-semibold text-red-600">-99 penalty</span>
              </div>
              <div className="flex justify-between">
                <span>🏢 Org bonus:</span>
                <span className="font-semibold">-3 to +3</span>
              </div>
            </div>
          </section>

          {/* Validation Checklist */}
          <section className="border-t pt-6">
            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-green-600">✅</span>
              Validation Rules
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-start gap-1.5">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>No duplicate names</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>Current positions must exist in position list</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>Names match exactly (case-sensitive)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>Org bonuses between -3 and +3</span>
              </li>
            </ul>
          </section>

          {/* Process */}
          <section className="border-t pt-6">
            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">🚀</span>
              Process Flow
            </h4>
            <ol className="space-y-2 text-xs text-gray-600">
              <li className="flex gap-2">
                <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                <span>Validate files</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                <span>Run algorithm</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                <span>View results</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
                <span>Download Excel</span>
              </li>
            </ol>
          </section>

          {/* Common Issues */}
          <section className="border-t pt-6">
            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-red-600">⚠️</span>
              Common Errors
            </h4>
            <div className="space-y-2">
              <div className="bg-red-50 border border-red-200 rounded p-2">
                <p className="text-xs font-semibold text-red-900 mb-0.5">
                  Position not in list
                </p>
                <p className="text-xs text-red-700">
                  Add missing position to position file
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded p-2">
                <p className="text-xs font-semibold text-red-900 mb-0.5">
                  Duplicate names
                </p>
                <p className="text-xs text-red-700">
                  Each name must be unique
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
