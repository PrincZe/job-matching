/**
 * PSD Officer Rotation Matching Algorithm
 * TypeScript implementation using Hungarian algorithm
 */

interface MatchingInput {
  officers: string[];
  positions: string[];
  officer_preferences: { [key: string]: string[] };
  position_preferences: { [key: string]: string[] };
  original_positions: { [key: string]: string };
  org_preferences: { [key: string]: number };
}

interface Assignment {
  officer: string;
  position: string;
  reward: number;
}

interface Metrics {
  total_reward: number;
  average_reward: number;
  officer_satisfaction: {
    1: number;
    2: number;
    3: number;
    none: number;
  };
  position_satisfaction: {
    1: number;
    2: number;
    3: number;
    none: number;
  };
  vacant_positions: number;
  unassigned_officers: number;
}

interface MatchingResult {
  success: boolean;
  assignments?: Assignment[];
  metrics?: Metrics;
  error?: string;
}

/**
 * Calculate officer's preference score for a position
 */
function officerScore(officer: string, position: string, officerPrefs: { [key: string]: string[] }): number {
  if (!officerPrefs[officer]) return 0;
  
  const prefs = officerPrefs[officer];
  const index = prefs.indexOf(position);
  
  if (index !== -1) {
    // 3 points for 1st choice, 2 for 2nd, 1 for 3rd
    return 4 - (index + 1);
  }
  return 0;
}

/**
 * Calculate position's preference score for an officer
 */
function positionScore(position: string, officer: string, positionPrefs: { [key: string]: string[] }): number {
  if (!positionPrefs[position]) return 0;
  
  const prefs = positionPrefs[position];
  const index = prefs.indexOf(officer);
  
  if (index !== -1) {
    // 3 points for 1st choice, 2 for 2nd, 1 for 3rd
    return 4 - (index + 1);
  }
  return 0;
}

/**
 * Build the reward matrix for optimization
 */
function buildRewardMatrix(input: MatchingInput): {
  matrix: number[][];
  allOfficers: string[];
  allPositions: string[];
} {
  const { officers, positions, officer_preferences, position_preferences, original_positions, org_preferences } = input;
  
  const numOfficers = officers.length;
  const numPositions = positions.length;
  
  // Initialize reward matrix
  const reward: number[][] = Array(numOfficers).fill(0).map(() => Array(numPositions).fill(0));
  
  // Fill reward matrix with preference scores
  for (let i = 0; i < numOfficers; i++) {
    for (let j = 0; j < numPositions; j++) {
      reward[i][j] = 
        officerScore(officers[i], positions[j], officer_preferences) +
        positionScore(positions[j], officers[i], position_preferences);
    }
  }
  
  // Apply rotation penalty (prevent returning to original position)
  const rotationPenalty = -99;
  for (const [officer, origPosition] of Object.entries(original_positions)) {
    const i = officers.indexOf(officer);
    const j = positions.indexOf(origPosition);
    if (i !== -1 && j !== -1) {
      reward[i][j] += rotationPenalty;
    }
  }
  
  // Apply organization preferences
  for (const [key, bonus] of Object.entries(org_preferences)) {
    if (key.includes(',')) {
      const [officer, position] = key.split(',');
      const i = officers.indexOf(officer);
      const j = positions.indexOf(position);
      if (i !== -1 && j !== -1) {
        reward[i][j] += bonus;
      }
    }
  }
  
  // Pad matrix if needed
  const { matrix: paddedMatrix, allOfficers, allPositions } = padMatrix(reward, officers, positions);
  
  return { matrix: paddedMatrix, allOfficers, allPositions };
}

/**
 * Pad matrix to handle unequal officers and positions
 */
function padMatrix(reward: number[][], officers: string[], positions: string[]): {
  matrix: number[][];
  allOfficers: string[];
  allPositions: string[];
} {
  const numOfficers = officers.length;
  const numPositions = positions.length;
  
  const unassignedPenalty = -3;
  const vacantPenalty = -3;
  
  let paddedMatrix = reward.map(row => [...row]);
  let allOfficers = [...officers];
  let allPositions = [...positions];
  
  if (numOfficers < numPositions) {
    // More positions than officers - add dummy officers
    const numDummies = numPositions - numOfficers;
    for (let k = 0; k < numDummies; k++) {
      paddedMatrix.push(Array(numPositions).fill(vacantPenalty));
      allOfficers.push(`Vacant_${k + 1}`);
    }
  } else if (numOfficers > numPositions) {
    // More officers than positions - add dummy positions
    const numDummies = numOfficers - numPositions;
    for (let i = 0; i < paddedMatrix.length; i++) {
      for (let k = 0; k < numDummies; k++) {
        paddedMatrix[i].push(unassignedPenalty);
      }
    }
    for (let k = 0; k < numDummies; k++) {
      allPositions.push(`Unassigned_${k + 1}`);
    }
  }
  
  return { matrix: paddedMatrix, allOfficers, allPositions };
}

/**
 * Hungarian Algorithm implementation
 * Solves the assignment problem to maximize total reward
 */
function hungarianAlgorithm(costMatrix: number[][]): number[] {
  const n = costMatrix.length;
  const m = costMatrix[0].length;
  
  // Convert reward to cost (negate values)
  const cost = costMatrix.map(row => row.map(val => -val));
  
  // Initialize
  const u = Array(n + 1).fill(0);
  const v = Array(m + 1).fill(0);
  const p = Array(m + 1).fill(0);
  const way = Array(m + 1).fill(0);
  
  for (let i = 1; i <= n; i++) {
    p[0] = i;
    let j0 = 0;
    const minv = Array(m + 1).fill(Infinity);
    const used = Array(m + 1).fill(false);
    
    do {
      used[j0] = true;
      let i0 = p[j0];
      let delta = Infinity;
      let j1 = 0;
      
      for (let j = 1; j <= m; j++) {
        if (!used[j]) {
          const cur = cost[i0 - 1][j - 1] - u[i0] - v[j];
          if (cur < minv[j]) {
            minv[j] = cur;
            way[j] = j0;
          }
          if (minv[j] < delta) {
            delta = minv[j];
            j1 = j;
          }
        }
      }
      
      for (let j = 0; j <= m; j++) {
        if (used[j]) {
          u[p[j]] += delta;
          v[j] -= delta;
        } else {
          minv[j] -= delta;
        }
      }
      
      j0 = j1;
    } while (p[j0] !== 0);
    
    do {
      const j1 = way[j0];
      p[j0] = p[j1];
      j0 = j1;
    } while (j0 !== 0);
  }
  
  const result = Array(n).fill(0);
  for (let j = 1; j <= m; j++) {
    if (p[j] !== 0) {
      result[p[j] - 1] = j - 1;
    }
  }
  
  return result;
}

/**
 * Calculate satisfaction metrics
 */
function calculateMetrics(
  assignments: Assignment[],
  officerPrefs: { [key: string]: string[] },
  positionPrefs: { [key: string]: string[] }
): {
  officerSatisfaction: { 1: number; 2: number; 3: number; none: number };
  positionSatisfaction: { 1: number; 2: number; 3: number; none: number };
} {
  const officerSatisfaction = { 1: 0, 2: 0, 3: 0, none: 0 };
  const positionSatisfaction = { 1: 0, 2: 0, 3: 0, none: 0 };
  
  for (const assignment of assignments) {
    const { officer, position } = assignment;
    
    // Skip dummy entries
    if (officer.startsWith('Vacant_') || position.startsWith('Unassigned_')) {
      continue;
    }
    
    // Officer satisfaction
    if (officerPrefs[officer] && officerPrefs[officer].includes(position)) {
      const rank = (officerPrefs[officer].indexOf(position) + 1) as 1 | 2 | 3;
      officerSatisfaction[rank]++;
    } else {
      officerSatisfaction.none++;
    }
    
    // Position satisfaction
    if (positionPrefs[position] && positionPrefs[position].includes(officer)) {
      const rank = (positionPrefs[position].indexOf(officer) + 1) as 1 | 2 | 3;
      positionSatisfaction[rank]++;
    } else {
      positionSatisfaction.none++;
    }
  }
  
  return { officerSatisfaction, positionSatisfaction };
}

/**
 * Main matching function
 */
export function runMatching(input: MatchingInput): MatchingResult {
  try {
    // Build reward matrix
    const { matrix, allOfficers, allPositions } = buildRewardMatrix(input);
    
    // Solve assignment problem using Hungarian algorithm
    const assignment = hungarianAlgorithm(matrix);
    
    // Extract assignments
    const assignments: Assignment[] = [];
    for (let i = 0; i < assignment.length; i++) {
      const j = assignment[i];
      assignments.push({
        officer: allOfficers[i],
        position: allPositions[j],
        reward: matrix[i][j]
      });
    }
    
    // Calculate metrics
    const { officerSatisfaction, positionSatisfaction } = calculateMetrics(
      assignments,
      input.officer_preferences,
      input.position_preferences
    );
    
    // Calculate totals
    const totalReward = assignments.reduce((sum, a) => sum + a.reward, 0);
    const avgReward = totalReward / assignments.length;
    
    const vacantCount = assignments.filter(a => a.officer.startsWith('Vacant_')).length;
    const unassignedCount = assignments.filter(a => a.position.startsWith('Unassigned_')).length;
    
    return {
      success: true,
      assignments,
      metrics: {
        total_reward: totalReward,
        average_reward: avgReward,
        officer_satisfaction: officerSatisfaction,
        position_satisfaction: positionSatisfaction,
        vacant_positions: vacantCount,
        unassigned_officers: unassignedCount
      }
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}
