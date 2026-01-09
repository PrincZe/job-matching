import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';
import path from 'path';

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

    // Prepare input for Python script
    const input = {
      officers: body.officers,
      positions: body.positions,
      officer_preferences: body.officer_preferences,
      position_preferences: body.position_preferences,
      original_positions: body.original_positions,
      org_preferences: body.org_preferences || {}
    };

    // Run Python matching algorithm
    const result = await runPythonScript(input);
    
    return NextResponse.json(result);
    
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function runPythonScript(input: any): Promise<any> {
  return new Promise((resolve, reject) => {
    // Determine Python command (python3 on Unix, python on Windows)
    const pythonPath = process.platform === 'win32' ? 'python' : 'python3';
    const scriptPath = path.join(process.cwd(), 'lib', 'matching.py');
    
    const python = spawn(pythonPath, [scriptPath]);
    
    let output = '';
    let errorOutput = '';
    
    python.stdout.on('data', (data) => {
      output += data.toString();
    });
    
    python.stderr.on('data', (data) => {
      errorOutput += data.toString();
    });
    
    python.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Python script failed: ${errorOutput}`));
        return;
      }
      
      try {
        const result = JSON.parse(output);
        resolve(result);
      } catch (error) {
        reject(new Error(`Failed to parse Python output: ${output}`));
      }
    });
    
    // Send input to Python script
    python.stdin.write(JSON.stringify(input));
    python.stdin.end();
  });
}
