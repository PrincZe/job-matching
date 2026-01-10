'use client';

import { Metrics } from '@/lib/types';

interface MetricsCardProps {
  metrics: Metrics;
}

export default function MetricsCard({ metrics }: MetricsCardProps) {
  const totalOfficers = metrics.officer_satisfaction[1] + metrics.officer_satisfaction[2] + metrics.officer_satisfaction[3] + metrics.officer_satisfaction.none;
  const satisfiedOfficers = metrics.officer_satisfaction[1] + metrics.officer_satisfaction[2] + metrics.officer_satisfaction[3];
  const satisfactionRate = totalOfficers > 0 ? (satisfiedOfficers / totalOfficers * 100).toFixed(1) : 0;

  return (
    <div className="space-y-6 mb-8">
      {/* Key Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <svg className="w-8 h-8 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <p className="text-3xl font-bold mb-1">{metrics.total_reward.toFixed(1)}</p>
          <p className="text-blue-100 text-sm font-medium">Total Reward Score</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <svg className="w-8 h-8 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          </div>
          <p className="text-3xl font-bold mb-1">{satisfactionRate}%</p>
          <p className="text-green-100 text-sm font-medium">Satisfaction Rate</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <svg className="w-8 h-8 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold mb-1">{totalOfficers}</p>
          <p className="text-purple-100 text-sm font-medium">Total Officers</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <svg className="w-8 h-8 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-3xl font-bold mb-1">{metrics.average_reward.toFixed(2)}</p>
          <p className="text-orange-100 text-sm font-medium">Avg Reward/Officer</p>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Officer Satisfaction */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Officer Satisfaction
            </h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-3">
                <div className="bg-green-500 rounded-full p-2">
                  <span className="text-white font-bold text-sm">1st</span>
                </div>
                <span className="font-medium text-gray-700">First Choice</span>
              </div>
              <span className="text-2xl font-bold text-green-600">{metrics.officer_satisfaction[1]}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 rounded-full p-2">
                  <span className="text-white font-bold text-sm">2nd</span>
                </div>
                <span className="font-medium text-gray-700">Second Choice</span>
              </div>
              <span className="text-2xl font-bold text-blue-600">{metrics.officer_satisfaction[2]}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500 rounded-full p-2">
                  <span className="text-white font-bold text-sm">3rd</span>
                </div>
                <span className="font-medium text-gray-700">Third Choice</span>
              </div>
              <span className="text-2xl font-bold text-yellow-600">{metrics.officer_satisfaction[3]}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-gray-500 rounded-full p-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="font-medium text-gray-700">None Listed</span>
              </div>
              <span className="text-2xl font-bold text-gray-600">{metrics.officer_satisfaction.none}</span>
            </div>
          </div>
        </div>

        {/* Position Satisfaction */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Position Satisfaction
            </h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-3">
                <div className="bg-green-500 rounded-full p-2">
                  <span className="text-white font-bold text-sm">1st</span>
                </div>
                <span className="font-medium text-gray-700">First Choice</span>
              </div>
              <span className="text-2xl font-bold text-green-600">{metrics.position_satisfaction[1]}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 rounded-full p-2">
                  <span className="text-white font-bold text-sm">2nd</span>
                </div>
                <span className="font-medium text-gray-700">Second Choice</span>
              </div>
              <span className="text-2xl font-bold text-blue-600">{metrics.position_satisfaction[2]}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500 rounded-full p-2">
                  <span className="text-white font-bold text-sm">3rd</span>
                </div>
                <span className="font-medium text-gray-700">Third Choice</span>
              </div>
              <span className="text-2xl font-bold text-yellow-600">{metrics.position_satisfaction[3]}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-gray-500 rounded-full p-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="font-medium text-gray-700">None Listed</span>
              </div>
              <span className="text-2xl font-bold text-gray-600">{metrics.position_satisfaction.none}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
