'use client';

import Link from 'next/link';

export default function LearnMore() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="font-medium">Back to Matching</span>
              </Link>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  How It Works - Detailed Guide
                </h1>
                <p className="text-gray-600 text-sm mt-1">Understanding the matching algorithm with examples</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Table of Contents */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span>📚</span>
            Quick Navigation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            <a href="#algorithm" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">Algorithm</a>
            <a href="#scoring" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">Scoring</a>
            <a href="#example-basic" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">Basic Example</a>
            <a href="#example-complex" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">Complex</a>
            <a href="#edge-cases" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">Edge Cases</a>
            <a href="#best-practices" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">Best Practices</a>
          </div>
        </div>

        {/* Row 1: Algorithm + Scoring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Section 1: The Algorithm */}
          <section id="algorithm" className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">🧮</span>
              The Hungarian Algorithm
            </h2>
            
            <div className="space-y-3 text-sm text-gray-700">
              <p className="leading-relaxed">
                The <strong>Hungarian Algorithm</strong> solves the <strong>assignment problem</strong>: Given N officers and N positions, find the optimal one-to-one assignment that maximizes total satisfaction.
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-bold text-purple-900 mb-2 text-sm">Why Use This?</h3>
                <ul className="space-y-1.5 text-xs text-purple-900">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Optimal:</strong> Best possible outcome</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Fair:</strong> Considers all preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Fast:</strong> Handles 100+ officers instantly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Proven:</strong> Used in economics & logistics</span>
                  </li>
                </ul>
              </div>

              <p className="text-xs text-gray-600 italic">
                Builds a &quot;reward matrix&quot; where each cell = how good a pairing would be, then finds the assignment that maximizes total reward.
              </p>
            </div>
          </section>

          {/* Section 2: Scoring */}
          <section id="scoring" className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              Scoring System
            </h2>

            <div className="space-y-3">
              <p className="text-sm text-gray-700">
                Each officer-position pairing gets a <strong>reward score</strong>:
              </p>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between items-center bg-green-50 px-3 py-2 rounded">
                  <span className="font-semibold text-gray-900">🥇 1st Choice (Officer/Position)</span>
                  <span className="font-bold text-green-600">+3</span>
                </div>
                <div className="flex justify-between items-center bg-blue-50 px-3 py-2 rounded">
                  <span className="font-semibold text-gray-900">🥈 2nd Choice</span>
                  <span className="font-bold text-blue-600">+2</span>
                </div>
                <div className="flex justify-between items-center bg-yellow-50 px-3 py-2 rounded">
                  <span className="font-semibold text-gray-900">🥉 3rd Choice</span>
                  <span className="font-bold text-yellow-600">+1</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded">
                  <span className="font-semibold text-gray-900">Not Listed</span>
                  <span className="font-bold text-gray-600">0</span>
                </div>
                <div className="flex justify-between items-center bg-purple-50 px-3 py-2 rounded">
                  <span className="font-semibold text-gray-900">🏢 Org Bonus/Penalty</span>
                  <span className="font-bold text-purple-600">-3 to +3</span>
                </div>
                <div className="flex justify-between items-center bg-red-50 px-3 py-2 rounded border-2 border-red-300">
                  <span className="font-semibold text-gray-900">🔄 Current Position</span>
                  <span className="font-bold text-red-600">-99</span>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded-r-lg">
                <p className="text-xs text-yellow-900">
                  <strong>⚠️ The -99 penalty</strong> ensures officers rotate to new roles instead of staying in place.
                </p>
              </div>
            </div>
          </section>
        </div>


        {/* Row 2: Basic Example */}
        <section id="example-basic" className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">📝</span>
            Basic Example: 3 Officers, 3 Positions
          </h2>

          <div className="space-y-4">
            {/* Input Data */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Input Data</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Officer Preferences */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <h4 className="font-bold text-green-900 mb-2 text-sm">Officer Preferences</h4>
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-green-300">
                        <th className="text-left py-1">Officer</th>
                        <th className="text-left py-1">Current</th>
                        <th className="text-left py-1">Wants</th>
                      </tr>
                    </thead>
                    <tbody className="text-green-900">
                      <tr className="border-b border-green-200">
                        <td className="py-1">Alice</td>
                        <td className="py-1 text-gray-600">A</td>
                        <td className="py-1">B,C,A</td>
                      </tr>
                      <tr className="border-b border-green-200">
                        <td className="py-1">Bob</td>
                        <td className="py-1 text-gray-600">B</td>
                        <td className="py-1">C,A,B</td>
                      </tr>
                      <tr>
                        <td className="py-1">Carol</td>
                        <td className="py-1 text-gray-600">C</td>
                        <td className="py-1">A,B,C</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Position Preferences */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <h4 className="font-bold text-blue-900 mb-2 text-sm">Position Preferences</h4>
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-blue-300">
                        <th className="text-left py-1">Position</th>
                        <th className="text-left py-1">Wants</th>
                      </tr>
                    </thead>
                    <tbody className="text-blue-900">
                      <tr className="border-b border-blue-200">
                        <td className="py-1">Pos A</td>
                        <td className="py-1">Carol,Bob,Alice</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="py-1">Pos B</td>
                        <td className="py-1">Alice,Carol,Bob</td>
                      </tr>
                      <tr>
                        <td className="py-1">Pos C</td>
                        <td className="py-1">Bob,Alice,Carol</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Result */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-3">
                  <h4 className="font-bold text-green-900 mb-2 text-sm">✨ Result</h4>
                  <div className="space-y-1.5 text-xs">
                    <div className="bg-white rounded px-2 py-1.5 flex justify-between items-center">
                      <span className="font-semibold">Alice → B</span>
                      <span className="text-green-600 font-bold">+6</span>
                    </div>
                    <div className="bg-white rounded px-2 py-1.5 flex justify-between items-center">
                      <span className="font-semibold">Bob → C</span>
                      <span className="text-green-600 font-bold">+6</span>
                    </div>
                    <div className="bg-white rounded px-2 py-1.5 flex justify-between items-center">
                      <span className="font-semibold">Carol → A</span>
                      <span className="text-green-600 font-bold">+6</span>
                    </div>
                    <div className="border-t border-green-300 pt-1.5 mt-1.5">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-900">Total:</span>
                        <span className="font-bold text-green-600 text-lg">18</span>
                      </div>
                      <p className="text-[10px] text-gray-600 mt-1">Everyone got 1st choice!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reward Matrix */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Reward Matrix (How Scores Are Calculated)</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-2 py-1.5 text-left">Officer</th>
                      <th className="border border-gray-300 px-2 py-1.5">Pos A</th>
                      <th className="border border-gray-300 px-2 py-1.5">Pos B</th>
                      <th className="border border-gray-300 px-2 py-1.5">Pos C</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1.5 font-semibold">Alice</td>
                      <td className="border border-gray-300 px-2 py-1.5 bg-red-50 text-center">
                        <strong className="text-red-600">-99</strong>
                        <div className="text-[10px] text-gray-600">current</div>
                      </td>
                      <td className="border border-gray-300 px-2 py-1.5 bg-green-50 text-center">
                        <strong className="text-green-600">6</strong>
                        <div className="text-[10px] text-gray-600">both 1st</div>
                      </td>
                      <td className="border border-gray-300 px-2 py-1.5 bg-blue-50 text-center">
                        <strong className="text-blue-600">4</strong>
                        <div className="text-[10px] text-gray-600">both 2nd</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1.5 font-semibold">Bob</td>
                      <td className="border border-gray-300 px-2 py-1.5 bg-blue-50 text-center">
                        <strong className="text-blue-600">4</strong>
                        <div className="text-[10px] text-gray-600">both 2nd</div>
                      </td>
                      <td className="border border-gray-300 px-2 py-1.5 bg-red-50 text-center">
                        <strong className="text-red-600">-99</strong>
                        <div className="text-[10px] text-gray-600">current</div>
                      </td>
                      <td className="border border-gray-300 px-2 py-1.5 bg-green-50 text-center">
                        <strong className="text-green-600">6</strong>
                        <div className="text-[10px] text-gray-600">both 1st</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1.5 font-semibold">Carol</td>
                      <td className="border border-gray-300 px-2 py-1.5 bg-green-50 text-center">
                        <strong className="text-green-600">6</strong>
                        <div className="text-[10px] text-gray-600">both 1st</div>
                      </td>
                      <td className="border border-gray-300 px-2 py-1.5 bg-blue-50 text-center">
                        <strong className="text-blue-600">4</strong>
                        <div className="text-[10px] text-gray-600">both 2nd</div>
                      </td>
                      <td className="border border-gray-300 px-2 py-1.5 bg-red-50 text-center">
                        <strong className="text-red-600">-99</strong>
                        <div className="text-[10px] text-gray-600">current</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">
                Algorithm picks assignments with highest scores while ensuring each officer gets exactly one position.
              </p>
            </div>
          </div>
        </section>

        {/* Row 3: Complex Scenario + Edge Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Section 4: Complex Scenario */}
          <section id="example-complex" className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">🔧</span>
              Org Preferences Example
            </h2>

            <div className="space-y-3">
              <p className="text-sm text-gray-700">
                Use org bonuses to influence assignments for strategic reasons:
              </p>

              {/* Scenario */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <h3 className="font-bold text-purple-900 mb-2 text-sm">Scenario: Succession Planning</h3>
                <p className="text-xs text-purple-800 mb-2">
                  Groom <strong>David</strong> for leadership by assigning to <strong>Manager (Finance)</strong>.
                </p>
                
                <div className="bg-white rounded p-2">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-1">Officer</th>
                        <th className="text-left py-1">Position</th>
                        <th className="text-left py-1">Bonus</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-1">David</td>
                        <td className="py-1">Mgr (Finance)</td>
                        <td className="py-1 text-green-600 font-bold">+3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Impact */}
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">Impact on Scoring</h3>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-50 border border-gray-300 rounded p-2">
                    <h4 className="font-semibold text-gray-900 mb-1 text-xs">Without:</h4>
                    <div className="space-y-0.5 text-[10px]">
                      <p className="text-gray-600">+2 (David 2nd)</p>
                      <p className="text-gray-600">+1 (Pos 3rd)</p>
                      <p className="text-gray-600">+0 (org)</p>
                      <p className="font-bold text-blue-600 mt-1">= 3 pts</p>
                    </div>
                  </div>

                  <div className="bg-green-50 border-2 border-green-400 rounded p-2">
                    <h4 className="font-semibold text-green-900 mb-1 text-xs">With Bonus:</h4>
                    <div className="space-y-0.5 text-[10px]">
                      <p className="text-gray-600">+2 (David 2nd)</p>
                      <p className="text-gray-600">+1 (Pos 3rd)</p>
                      <p className="text-green-600 font-bold">+3 (org) ⭐</p>
                      <p className="font-bold text-green-600 mt-1">= 6 pts</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-2 rounded-r mt-2">
                  <p className="text-xs text-blue-900">
                    <strong>Result:</strong> Bonus doubles the score, making this assignment much more likely!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Edge Cases */}
          <section id="edge-cases" className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">⚠️</span>
              Edge Cases
            </h2>

            <div className="space-y-2">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <h3 className="font-bold text-yellow-900 mb-1 text-sm flex items-center gap-1">
                  <span>1.</span>
                  <span>More Officers than Positions</span>
                </h3>
                <p className="text-xs text-yellow-800 mb-1">
                  10 officers, 8 positions → 2 officers unassigned
                </p>
                <div className="bg-white rounded p-2">
                  <p className="text-[10px] text-gray-700"><strong>Fix:</strong> Add positions or keep some in current roles</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <h3 className="font-bold text-blue-900 mb-1 text-sm flex items-center gap-1">
                  <span>2.</span>
                  <span>More Positions than Officers</span>
                </h3>
                <p className="text-xs text-blue-800 mb-1">
                  8 officers, 10 positions → 2 positions vacant
                </p>
                <div className="bg-white rounded p-2">
                  <p className="text-[10px] text-gray-700"><strong>Fix:</strong> Recruit or consolidate positions</p>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <h3 className="font-bold text-purple-900 mb-1 text-sm flex items-center gap-1">
                  <span>3.</span>
                  <span>Everyone Wants Same Position</span>
                </h3>
                <p className="text-xs text-purple-800 mb-1">
                  All 5 officers want &quot;Manager (Finance)&quot;
                </p>
                <div className="bg-white rounded p-2">
                  <p className="text-[10px] text-gray-700"><strong>How resolved:</strong> Position preferences break the tie</p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <h3 className="font-bold text-red-900 mb-1 text-sm flex items-center gap-1">
                  <span>4.</span>
                  <span>No Mutual Preferences</span>
                </h3>
                <p className="text-xs text-red-800 mb-1">
                  Officer and position don&apos;t prefer each other
                </p>
                <div className="bg-white rounded p-2">
                  <p className="text-[10px] text-gray-700"><strong>Result:</strong> Score = 0. Use org bonuses to guide</p>
                </div>
              </div>
            </div>
          </section>
        </div>


        {/* Row 4: Best Practices */}
        <section id="best-practices" className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">💡</span>
            Best Practices
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <span className="text-xl">✅</span>
                <div>
                  <h3 className="font-bold text-green-900 mb-2 text-sm">DO</h3>
                  <ul className="space-y-1 text-xs text-green-800">
                    <li>• Collect honest preferences</li>
                    <li>• Use org bonuses sparingly</li>
                    <li>• Review and iterate</li>
                    <li>• Communicate the process</li>
                    <li>• Keep names consistent</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <span className="text-xl">❌</span>
                <div>
                  <h3 className="font-bold text-red-900 mb-2 text-sm">DON&apos;T</h3>
                  <ul className="space-y-1 text-xs text-red-800">
                    <li>• Override all preferences</li>
                    <li>• Use extreme bonuses carelessly</li>
                    <li>• Forget positions in file</li>
                    <li>• Have duplicate names</li>
                    <li>• Ignore results blindly</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg p-4">
              <h3 className="font-bold text-blue-900 mb-2 text-sm flex items-center gap-1">
                <span>🔄</span>
                <span>Iterative Approach</span>
              </h3>
              <ol className="space-y-1 text-xs text-blue-900">
                <li className="flex gap-1.5">
                  <span className="font-bold">1.</span>
                  <span>Run with basic prefs</span>
                </li>
                <li className="flex gap-1.5">
                  <span className="font-bold">2.</span>
                  <span>Review results</span>
                </li>
                <li className="flex gap-1.5">
                  <span className="font-bold">3.</span>
                  <span>Add org bonuses</span>
                </li>
                <li className="flex gap-1.5">
                  <span className="font-bold">4.</span>
                  <span>Run again & compare</span>
                </li>
                <li className="flex gap-1.5">
                  <span className="font-bold">5.</span>
                  <span>Repeat until satisfied</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Back to Top */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Matching Tool
          </Link>
        </div>
      </div>
    </main>
  );
}
