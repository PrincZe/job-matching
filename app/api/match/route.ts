import { NextRequest, NextResponse } from 'next/server';
import { runMatching } from '@/lib/matching';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    if (!body.officers || !body.positions || !body.officer_preferences || !body.position_preferences) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare input for matching algorithm
    const input = {
      officers: body.officers,
      positions: body.positions,
      officer_preferences: body.officer_preferences,
      position_preferences: body.position_preferences,
      original_positions: body.original_positions,
      org_preferences: body.org_preferences || {}
    };

    // Run matching algorithm (TypeScript implementation)
    const result = runMatching(input);
    
    return NextResponse.json(result);
    
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
