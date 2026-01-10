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

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Table of Contents */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📚</span>
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a href="#algorithm" className="text-blue-600 hover:text-blue-800 hover:underline">1. The Hungarian Algorithm</a>
            <a href="#scoring" className="text-blue-600 hover:text-blue-800 hover:underline">2. How Scoring Works</a>
            <a href="#example-basic" className="text-blue-600 hover:text-blue-800 hover:underline">3. Basic Example</a>
            <a href="#example-complex" className="text-blue-600 hover:text-blue-800 hover:underline">4. Complex Scenario</a>
            <a href="#edge-cases" className="text-blue-600 hover:text-blue-800 hover:underline">5. Edge Cases</a>
            <a href="#best-practices" className="text-blue-600 hover:text-blue-800 hover:underline">6. Best Practices</a>
          </div>
        </div>

        {/* Section 1: The Algorithm */}
        <section id="algorithm" className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-3xl">🧮</span>
            The Hungarian Algorithm
          </h2>
          
          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              The <strong>Hungarian Algorithm</strong> (also known as the Kuhn-Munkres algorithm) is a combinatorial optimization method that solves the <strong>assignment problem</strong> in polynomial time.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="font-semibold text-blue-900 mb-2">What is the Assignment Problem?</p>
              <p className="text-blue-800">
                Given N officers and N positions, find the optimal one-to-one assignment that maximizes total satisfaction (or minimizes cost).
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <h3 className="font-bold text-purple-900 mb-3">Why Use This Algorithm?</h3>
              <ul className="space-y-2 text-purple-900">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Optimal:</strong> Guarantees the best possible global outcome</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Fair:</strong> Considers both officer and position preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Fast:</strong> Runs in O(n³) time - handles 100+ officers instantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Proven:</strong> Used in economics, logistics, and workforce planning</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-600 italic">
              The algorithm builds a &quot;reward matrix&quot; where each cell represents how good a particular officer-position pairing would be, then finds the assignment that maximizes the total reward.
            </p>
          </div>
        </section>

        {/* Section 2: Scoring System */}
        <section id="scoring" className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            How Scoring Works
          </h2>

          <div className="space-y-6">
            <p className="text-gray-700 text-lg">
              Each potential officer-position pairing receives a <strong>reward score</strong> based on multiple factors:
            </p>

            {/* Scoring Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">Factor</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Points</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Officer&apos;s 1st Choice</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">+3</td>
                    <td className="border border-gray-300 px-4 py-3">Position is officer&apos;s top preference</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Officer&apos;s 2nd Choice</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-600 font-bold">+2</td>
                    <td className="border border-gray-300 px-4 py-3">Position is officer&apos;s second preference</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Officer&apos;s 3rd Choice</td>
                    <td className="border border-gray-300 px-4 py-3 text-yellow-600 font-bold">+1</td>
                    <td className="border border-gray-300 px-4 py-3">Position is officer&apos;s third preference</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Not in Preferences</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600 font-bold">0</td>
                    <td className="border border-gray-300 px-4 py-3">Position not listed in officer&apos;s preferences</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Position&apos;s 1st Choice</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">+3</td>
                    <td className="border border-gray-300 px-4 py-3">Officer is position&apos;s top choice</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Position&apos;s 2nd Choice</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-600 font-bold">+2</td>
                    <td className="border border-gray-300 px-4 py-3">Officer is position&apos;s second choice</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Position&apos;s 3rd Choice</td>
                    <td className="border border-gray-300 px-4 py-3 text-yellow-600 font-bold">+1</td>
                    <td className="border border-gray-300 px-4 py-3">Officer is position&apos;s third choice</td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Org Bonus/Penalty</td>
                    <td className="border border-gray-300 px-4 py-3 text-purple-600 font-bold">-3 to +3</td>
                    <td className="border border-gray-300 px-4 py-3">Strategic organizational adjustment</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Current Position</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">-99</td>
                    <td className="border border-gray-300 px-4 py-3">Heavy penalty to force rotation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <p className="font-semibold text-yellow-900 mb-2">⚠️ Important: The -99 Penalty</p>
              <p className="text-yellow-800">
                The large negative score for staying in the current position ensures officers rotate to new roles. Without this, the algorithm might leave officers in place if preferences don&apos;t strongly favor a move.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Basic Example */}
        <section id="example-basic" className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-3xl">📝</span>
            Basic Example: 3 Officers, 3 Positions
          </h2>

          <div className="space-y-6">
            {/* Input Data */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Input Data</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Officer Preferences */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-green-900 mb-3">Officer Preferences</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-green-300">
                        <th className="text-left py-2">Officer</th>
                        <th className="text-left py-2">Current</th>
                        <th className="text-left py-2">Wants</th>
                      </tr>
                    </thead>
                    <tbody className="text-green-900">
                      <tr className="border-b border-green-200">
                        <td className="py-2">Alice</td>
                        <td className="py-2 text-gray-600">Pos A</td>
                        <td className="py-2">B, C, A</td>
                      </tr>
                      <tr className="border-b border-green-200">
                        <td className="py-2">Bob</td>
                        <td className="py-2 text-gray-600">Pos B</td>
                        <td className="py-2">C, A, B</td>
                      </tr>
                      <tr>
                        <td className="py-2">Carol</td>
                        <td className="py-2 text-gray-600">Pos C</td>
                        <td className="py-2">A, B, C</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Position Preferences */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-bold text-blue-900 mb-3">Position Preferences</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-blue-300">
                        <th className="text-left py-2">Position</th>
                        <th className="text-left py-2">Wants</th>
                      </tr>
                    </thead>
                    <tbody className="text-blue-900">
                      <tr className="border-b border-blue-200">
                        <td className="py-2">Position A</td>
                        <td className="py-2">Carol, Bob, Alice</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="py-2">Position B</td>
                        <td className="py-2">Alice, Carol, Bob</td>
                      </tr>
                      <tr>
                        <td className="py-2">Position C</td>
                        <td className="py-2">Bob, Alice, Carol</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Reward Matrix */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Step 1: Calculate Reward Matrix</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">Officer → Position</th>
                      <th className="border border-gray-300 px-4 py-2">Position A</th>
                      <th className="border border-gray-300 px-4 py-2">Position B</th>
                      <th className="border border-gray-300 px-4 py-2">Position C</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Alice</td>
                      <td className="border border-gray-300 px-4 py-2 bg-red-50">
                        <strong>-99</strong>
                        <div className="text-xs text-gray-600">(current pos)</div>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-green-50">
                        <strong>6</strong>
                        <div className="text-xs text-gray-600">(+3 Alice 1st, +3 Pos B 1st)</div>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-blue-50">
                        <strong>4</strong>
                        <div className="text-xs text-gray-600">(+2 Alice 2nd, +2 Pos C 2nd)</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Bob</td>
                      <td className="border border-gray-300 px-4 py-2 bg-blue-50">
                        <strong>4</strong>
                        <div className="text-xs text-gray-600">(+2 Bob 2nd, +2 Pos A 2nd)</div>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-red-50">
                        <strong>-99</strong>
                        <div className="text-xs text-gray-600">(current pos)</div>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-green-50">
                        <strong>6</strong>
                        <div className="text-xs text-gray-600">(+3 Bob 1st, +3 Pos C 1st)</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Carol</td>
                      <td className="border border-gray-300 px-4 py-2 bg-green-50">
                        <strong>6</strong>
                        <div className="text-xs text-gray-600">(+3 Carol 1st, +3 Pos A 1st)</div>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-blue-50">
                        <strong>4</strong>
                        <div className="text-xs text-gray-600">(+2 Carol 2nd, +2 Pos B 2nd)</div>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 bg-red-50">
                        <strong>-99</strong>
                        <div className="text-xs text-gray-600">(current pos)</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Algorithm Result */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Step 2: Find Optimal Assignment</h3>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">👤</span>
                      <div>
                        <p className="font-bold text-gray-900">Alice → Position B</p>
                        <p className="text-sm text-gray-600">Score: 6 (both 1st choice!)</p>
                      </div>
                    </div>
                    <span className="text-green-600 font-bold text-xl">+6</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">👤</span>
                      <div>
                        <p className="font-bold text-gray-900">Bob → Position C</p>
                        <p className="text-sm text-gray-600">Score: 6 (both 1st choice!)</p>
                      </div>
                    </div>
                    <span className="text-green-600 font-bold text-xl">+6</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">👤</span>
                      <div>
                        <p className="font-bold text-gray-900">Carol → Position A</p>
                        <p className="text-sm text-gray-600">Score: 6 (both 1st choice!)</p>
                      </div>
                    </div>
                    <span className="text-green-600 font-bold text-xl">+6</span>
                  </div>
                  <div className="border-t-2 border-gray-300 pt-3 mt-3">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-gray-900 text-lg">Total Reward:</p>
                      <p className="font-bold text-green-600 text-2xl">18</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">✨ Perfect match! Everyone got their 1st choice!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Complex Scenario */}
        <section id="example-complex" className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-3xl">🔧</span>
            Complex Scenario: With Org Preferences
          </h2>

          <div className="space-y-6">
            <p className="text-gray-700 text-lg">
              Sometimes the organization needs to influence assignments for strategic reasons. Here&apos;s how org preferences work:
            </p>

            {/* Scenario Setup */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="font-bold text-purple-900 mb-3 text-lg">Scenario: Succession Planning</h3>
              <p className="text-purple-800 mb-4">
                The organization wants to groom <strong>David</strong> for a leadership role by assigning him to <strong>Manager (Finance)</strong>, even if it&apos;s not his top choice.
              </p>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Org Preferences File:</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-2">Officer</th>
                      <th className="text-left py-2">Position</th>
                      <th className="text-left py-2">Bonus</th>
                      <th className="text-left py-2">Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">David</td>
                      <td className="py-2">Manager (Finance)</td>
                      <td className="py-2 text-green-600 font-bold">+3</td>
                      <td className="py-2 text-gray-600">Succession planning</td>
                    </tr>
                    <tr>
                      <td className="py-2">Emma</td>
                      <td className="py-2">Analyst (Data)</td>
                      <td className="py-2 text-red-600 font-bold">-2</td>
                      <td className="py-2 text-gray-600">Needs more experience first</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Impact Example */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Impact on Scoring</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Without Org Bonus:</h4>
                  <div className="space-y-2 text-sm">
                    <p>David → Manager (Finance)</p>
                    <p className="text-gray-600">• David&apos;s 2nd choice: +2</p>
                    <p className="text-gray-600">• Position&apos;s 3rd choice: +1</p>
                    <p className="text-gray-600">• Org bonus: 0</p>
                    <p className="font-bold text-blue-600 mt-2">Total: 3 points</p>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-400 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-3">With Org Bonus:</h4>
                  <div className="space-y-2 text-sm">
                    <p>David → Manager (Finance)</p>
                    <p className="text-gray-600">• David&apos;s 2nd choice: +2</p>
                    <p className="text-gray-600">• Position&apos;s 3rd choice: +1</p>
                    <p className="text-green-600 font-bold">• Org bonus: +3 ⭐</p>
                    <p className="font-bold text-green-600 mt-2">Total: 6 points</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-4">
                <p className="text-blue-900">
                  <strong>Result:</strong> The +3 org bonus makes this assignment more attractive to the algorithm, increasing the likelihood that David gets assigned to Manager (Finance) for strategic succession planning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Edge Cases */}
        <section id="edge-cases" className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-3xl">⚠️</span>
            Edge Cases & Special Situations
          </h2>

          <div className="space-y-4">
            {/* Unequal Numbers */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                <span>1.</span>
                <span>Unequal Numbers (More Officers than Positions)</span>
              </h3>
              <p className="text-yellow-800 mb-3">
                If you have 10 officers but only 8 positions, the algorithm will leave 2 officers unassigned.
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm text-gray-700"><strong>Solution:</strong> Add &quot;dummy&quot; positions or review which officers should stay in current roles.</p>
              </div>
            </div>

            {/* More Positions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                <span>2.</span>
                <span>More Positions than Officers</span>
              </h3>
              <p className="text-blue-800 mb-3">
                If you have 8 officers but 10 positions, 2 positions will remain vacant.
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm text-gray-700"><strong>Solution:</strong> Recruit new officers or consider consolidating positions.</p>
              </div>
            </div>

            {/* Conflicting Preferences */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                <span>3.</span>
                <span>Everyone Wants the Same Position</span>
              </h3>
              <p className="text-purple-800 mb-3">
                If all 5 officers list &quot;Manager (Finance)&quot; as their 1st choice, only one can get it.
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm text-gray-700"><strong>How it&apos;s resolved:</strong> The algorithm considers position preferences too. The officer who is also the position&apos;s top choice gets the highest score (6 points) and is most likely to be assigned.</p>
              </div>
            </div>

            {/* No Preferences Match */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <span>4.</span>
                <span>No Mutual Preferences</span>
              </h3>
              <p className="text-red-800 mb-3">
                What if an officer&apos;s preferences don&apos;t match any position&apos;s preferences?
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm text-gray-700"><strong>Result:</strong> They&apos;ll get a score of 0 for those pairings. The algorithm will still find the best overall assignment, but satisfaction will be lower. Use org bonuses to guide these cases.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Best Practices */}
        <section id="best-practices" className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-3xl">💡</span>
            Best Practices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-bold text-green-900 mb-2">DO</h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>• Collect honest preferences from officers and positions</li>
                    <li>• Use org bonuses sparingly for strategic needs</li>
                    <li>• Review results and iterate if needed</li>
                    <li>• Communicate the process to stakeholders</li>
                    <li>• Keep position names consistent across files</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <h3 className="font-bold text-red-900 mb-2">DON&apos;T</h3>
                  <ul className="space-y-2 text-sm text-red-800">
                    <li>• Override all preferences with org bonuses</li>
                    <li>• Use extreme bonuses (+3/-3) without good reason</li>
                    <li>• Forget to include all positions in the position file</li>
                    <li>• Have duplicate officer or position names</li>
                    <li>• Ignore the results without understanding why</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg p-6 mt-6">
            <h3 className="font-bold text-blue-900 mb-3 text-lg">Pro Tip: Iterative Approach</h3>
            <ol className="space-y-2 text-blue-900">
              <li className="flex gap-2">
                <span className="font-bold">1.</span>
                <span>Run the algorithm with just officer and position preferences</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">2.</span>
                <span>Review the results and identify any issues</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">3.</span>
                <span>Add targeted org bonuses to address specific concerns</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">4.</span>
                <span>Run again and compare results</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">5.</span>
                <span>Repeat until satisfied with the outcome</span>
              </li>
            </ol>
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
