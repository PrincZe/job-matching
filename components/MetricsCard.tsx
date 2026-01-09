'use client';

import { Metrics } from '@/lib/types';

interface MetricsCardProps {
  metrics: Metrics;
}

export default function MetricsCard({ metrics }: MetricsCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Overall Metrics */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Overall Metrics</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Total Reward:</span>
            <span className="font-medium">{metrics.total_reward.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Average Reward:</span>
            <span className="font-medium">{metrics.average_reward.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Vacant Positions:</span>
            <span className="font-medium">{metrics.vacant_positions}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Unassigned Officers:</span>
            <span className="font-medium">{metrics.unassigned_officers}</span>
          </div>
        </div>
      </div>

      {/* Officer Satisfaction */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Officer Satisfaction</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">1st Choice:</span>
            <span className="font-medium text-green-600">{metrics.officer_satisfaction[1]} officers</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">2nd Choice:</span>
            <span className="font-medium text-blue-600">{metrics.officer_satisfaction[2]} officers</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">3rd Choice:</span>
            <span className="font-medium text-yellow-600">{metrics.officer_satisfaction[3]} officers</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">None of above:</span>
            <span className="font-medium text-red-600">{metrics.officer_satisfaction.none} officers</span>
          </div>
        </div>
      </div>

      {/* Position Satisfaction */}
      <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
        <h3 className="text-lg font-bold mb-4">Position Satisfaction</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">{metrics.position_satisfaction[1]}</p>
            <p className="text-sm text-gray-600">1st Choice</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">{metrics.position_satisfaction[2]}</p>
            <p className="text-sm text-gray-600">2nd Choice</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">{metrics.position_satisfaction[3]}</p>
            <p className="text-sm text-gray-600">3rd Choice</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600">{metrics.position_satisfaction.none}</p>
            <p className="text-sm text-gray-600">None of above</p>
          </div>
        </div>
      </div>
    </div>
  );
}
