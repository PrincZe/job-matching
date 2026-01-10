'use client';

export default function UserGuide() {
  return (
    <div className="space-y-4">
      {/* How It Works Card */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h3 className="font-bold">How It Works</h3>
        </div>
        <p className="text-sm text-blue-50 leading-relaxed mb-3">
          Uses <strong>Hungarian Algorithm</strong> to find optimal matches based on preferences, priorities, and rotation rules.
        </p>
        <a
          href="/learn-more"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors"
        >
          <span>Learn More</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Required Files Card */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5">
        <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span className="text-green-600">📁</span>
          Required Files
        </h3>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5">REQ</span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-900">officer_preferences.xlsx</p>
              <p className="text-[10px] text-gray-500">Officers + top 3 preferences</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5">REQ</span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-900">position_preferences.xlsx</p>
              <p className="text-[10px] text-gray-500">Positions + top 3 officers</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5">OPT</span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-900">org_preferences.xlsx</p>
              <p className="text-[10px] text-gray-500">Bonus/penalty (-3 to +3)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scoring Card */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5">
        <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span className="text-orange-600">🎯</span>
          Scoring
        </h3>
        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">🥇 1st choice</span>
            <span className="font-bold text-green-600">+3</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">🥈 2nd choice</span>
            <span className="font-bold text-blue-600">+2</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">🥉 3rd choice</span>
            <span className="font-bold text-yellow-600">+1</span>
          </div>
          <div className="flex justify-between items-center pt-1 border-t">
            <span className="text-gray-600">🔄 Current pos</span>
            <span className="font-bold text-red-600">-99</span>
          </div>
        </div>
      </div>

      {/* Example Card */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200">
        <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
          <span>💡</span>
          Example
        </h3>
        <div className="text-xs text-purple-900 space-y-1 mb-3">
          <p className="font-semibold">John → Manager (Finance)</p>
          <div className="pl-3 space-y-0.5 text-purple-700">
            <p>• John&apos;s 1st choice: +3</p>
            <p>• Finance&apos;s 2nd choice: +2</p>
            <p>• Org bonus: +2</p>
            <p className="font-bold text-purple-900 pt-1">= 7 points total</p>
          </div>
        </div>
        <a
          href="/learn-more#example-basic"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs bg-purple-100 hover:bg-purple-200 text-purple-900 px-3 py-1.5 rounded-lg transition-colors"
        >
          <span>See Full Examples</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Important Notes Card */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-5 border border-yellow-200">
        <h3 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
          <span>⚠️</span>
          Important
        </h3>
        <ul className="space-y-1.5 text-xs text-yellow-900">
          <li className="flex gap-2">
            <span className="flex-shrink-0">•</span>
            <span>All current positions must exist in position file</span>
          </li>
          <li className="flex gap-2">
            <span className="flex-shrink-0">•</span>
            <span>No duplicate names allowed</span>
          </li>
          <li className="flex gap-2">
            <span className="flex-shrink-0">•</span>
            <span>Names are case-sensitive</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
