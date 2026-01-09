'use client';

import { Assignment } from '@/lib/types';
import * as XLSX from 'xlsx';

interface ResultsTableProps {
  assignments: Assignment[];
}

export default function ResultsTable({ assignments }: ResultsTableProps) {
  const handleDownload = () => {
    // Convert assignments to Excel format
    const ws = XLSX.utils.json_to_sheet(assignments);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Assignments');
    
    // Generate file
    XLSX.writeFile(wb, `psd_rotation_results_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  // Filter out dummy entries for display
  const realAssignments = assignments.filter(
    a => !a.officer.startsWith('Vacant_') && !a.position.startsWith('Unassigned_')
  );

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Assignment Results</h3>
        <button
          onClick={handleDownload}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Download Excel
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b text-left">Officer</th>
              <th className="px-4 py-2 border-b text-left">Assigned Position</th>
              <th className="px-4 py-2 border-b text-right">Reward Score</th>
            </tr>
          </thead>
          <tbody>
            {realAssignments.map((assignment, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{assignment.officer}</td>
                <td className="px-4 py-2 border-b">{assignment.position}</td>
                <td className="px-4 py-2 border-b text-right">
                  {assignment.reward.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
