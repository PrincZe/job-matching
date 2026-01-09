'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ResultsTable from '@/components/ResultsTable';
import MetricsCard from '@/components/MetricsCard';
import { MatchingResult } from '@/lib/types';

export default function ResultsPage() {
  const [results, setResults] = useState<MatchingResult | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedResults = sessionStorage.getItem('matchingResults');
    
    if (!storedResults) {
      router.push('/');
      return;
    }

    try {
      const parsed = JSON.parse(storedResults);
      setResults(parsed);
    } catch (error) {
      console.error('Failed to parse results:', error);
      router.push('/');
    }
  }, [router]);

  if (!results || !results.assignments || !results.metrics) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading results...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <button
            onClick={() => router.push('/')}
            className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
          >
            ← Back to Upload
          </button>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Matching Results</h1>

        <MetricsCard metrics={results.metrics} />
        <ResultsTable assignments={results.assignments} />
      </div>
    </main>
  );
}
