"""
PSD Officer Rotation Matching Algorithm
Uses Hungarian algorithm (linear_sum_assignment) to optimize officer-position matching
"""

import numpy as np
import pandas as pd
from scipy.optimize import linear_sum_assignment
import json
import sys

def parse_input(input_json):
    """Parse JSON input from API"""
    data = json.loads(input_json)
    
    officers = data['officers']
    positions = data['positions']
    officer_prefs = data['officer_preferences']
    position_prefs = data['position_preferences']
    original_positions = data['original_positions']
    org_prefs = data.get('org_preferences', {})
    
    return officers, positions, officer_prefs, position_prefs, original_positions, org_prefs

def officer_score(officer, position, officer_prefs):
    """Calculate officer's preference score for a position"""
    if officer not in officer_prefs:
        return 0
    
    prefs = officer_prefs[officer]
    if position in prefs:
        # 3 points for 1st choice, 2 for 2nd, 1 for 3rd
        return 4 - (prefs.index(position) + 1)
    return 0

def position_score(position, officer, position_prefs):
    """Calculate position's preference score for an officer"""
    if position not in position_prefs:
        return 0
    
    prefs = position_prefs[position]
    if officer in prefs:
        # 3 points for 1st choice, 2 for 2nd, 1 for 3rd
        return 4 - (prefs.index(officer) + 1)
    return 0

def build_reward_matrix(officers, positions, officer_prefs, position_prefs, original_positions, org_prefs):
    """Build the reward matrix for optimization"""
    num_officers = len(officers)
    num_positions = len(positions)
    
    # Create officer and position ID mappings
    officer_ids = {o: i for i, o in enumerate(officers)}
    position_ids = {p: j for j, p in enumerate(positions)}
    
    # Initialize reward matrix
    reward = np.zeros((num_officers, num_positions))
    
    # Fill reward matrix with preference scores
    for i, officer in enumerate(officers):
        for j, position in enumerate(positions):
            reward[i, j] = (
                officer_score(officer, position, officer_prefs) +
                position_score(position, officer, position_prefs)
            )
    
    # Apply rotation penalty (prevent returning to original position)
    rotation_penalty = -99
    for officer, orig_position in original_positions.items():
        if officer in officer_ids and orig_position in position_ids:
            i = officer_ids[officer]
            j = position_ids[orig_position]
            reward[i, j] += rotation_penalty
    
    # Apply organization preferences
    for key, bonus in org_prefs.items():
        if ',' in key:
            officer, position = key.split(',', 1)
            if officer in officer_ids and position in position_ids:
                i = officer_ids[officer]
                j = position_ids[position]
                reward[i, j] += bonus
    
    return reward, officer_ids, position_ids

def pad_matrix(reward, officers, positions):
    """Pad matrix to handle unequal officers and positions"""
    num_officers = len(officers)
    num_positions = len(positions)
    
    unassigned_penalty = -3
    vacant_penalty = -3
    
    if num_officers < num_positions:
        # More positions than officers - add dummy officers
        num_dummies = num_positions - num_officers
        dummy_rows = np.full((num_dummies, num_positions), vacant_penalty)
        reward_padded = np.vstack([reward, dummy_rows])
        dummy_officers = [f"Vacant_{k+1}" for k in range(num_dummies)]
        all_officers = officers + dummy_officers
        all_positions = positions
        
    elif num_officers > num_positions:
        # More officers than positions - add dummy positions
        num_dummies = num_officers - num_positions
        dummy_cols = np.full((num_officers, num_dummies), unassigned_penalty)
        reward_padded = np.hstack([reward, dummy_cols])
        dummy_positions = [f"Unassigned_{k+1}" for k in range(num_dummies)]
        all_officers = officers
        all_positions = positions + dummy_positions
        
    else:
        # Equal officers and positions
        reward_padded = reward
        all_officers = officers
        all_positions = positions
    
    return reward_padded, all_officers, all_positions

def solve_assignment(reward_padded):
    """Solve the assignment problem using Hungarian algorithm"""
    cost_matrix = -reward_padded  # Convert reward to cost
    row_ind, col_ind = linear_sum_assignment(cost_matrix)
    return row_ind, col_ind

def calculate_metrics(assignments, officer_prefs, position_prefs):
    """Calculate satisfaction metrics"""
    officer_top_counts = {1: 0, 2: 0, 3: 0, 'none': 0}
    position_top_counts = {1: 0, 2: 0, 3: 0, 'none': 0}
    
    for assignment in assignments:
        officer = assignment['officer']
        position = assignment['position']
        
        # Skip dummy entries
        if officer.startswith('Vacant_') or position.startswith('Unassigned_'):
            continue
        
        # Officer satisfaction
        if officer in officer_prefs and position in officer_prefs[officer]:
            rank = officer_prefs[officer].index(position) + 1
            officer_top_counts[rank] += 1
        else:
            officer_top_counts['none'] += 1
        
        # Position satisfaction
        if position in position_prefs and officer in position_prefs[position]:
            rank = position_prefs[position].index(officer) + 1
            position_top_counts[rank] += 1
        else:
            position_top_counts['none'] += 1
    
    return officer_top_counts, position_top_counts

def run_matching(input_json):
    """Main function to run the matching algorithm"""
    try:
        # Parse input
        officers, positions, officer_prefs, position_prefs, original_positions, org_prefs = parse_input(input_json)
        
        # Build reward matrix
        reward, officer_ids, position_ids = build_reward_matrix(
            officers, positions, officer_prefs, position_prefs, original_positions, org_prefs
        )
        
        # Pad matrix if needed
        reward_padded, all_officers, all_positions = pad_matrix(reward, officers, positions)
        
        # Solve assignment problem
        row_ind, col_ind = solve_assignment(reward_padded)
        
        # Extract assignments
        assignments = []
        for i, j in zip(row_ind, col_ind):
            assignments.append({
                'officer': all_officers[i],
                'position': all_positions[j],
                'reward': float(reward_padded[i, j])
            })
        
        # Calculate metrics
        officer_satisfaction, position_satisfaction = calculate_metrics(
            assignments, officer_prefs, position_prefs
        )
        
        # Calculate totals
        total_reward = sum(a['reward'] for a in assignments)
        avg_reward = total_reward / len(assignments)
        
        vacant_count = sum(1 for a in assignments if a['officer'].startswith('Vacant_'))
        unassigned_count = sum(1 for a in assignments if a['position'].startswith('Unassigned_'))
        
        # Return results
        return {
            'success': True,
            'assignments': assignments,
            'metrics': {
                'total_reward': float(total_reward),
                'average_reward': float(avg_reward),
                'officer_satisfaction': officer_satisfaction,
                'position_satisfaction': position_satisfaction,
                'vacant_positions': vacant_count,
                'unassigned_officers': unassigned_count
            }
        }
        
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

if __name__ == '__main__':
    # Read input from stdin
    input_data = sys.stdin.read()
    result = run_matching(input_data)
    print(json.dumps(result))
