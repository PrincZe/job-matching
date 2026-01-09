// Type definitions for the application

export interface OfficerPreference {
  officerName: string;
  currentPosition: string;
  preference1: string;
  preference2: string;
  preference3: string;
}

export interface PositionPreference {
  positionName: string;
  preference1: string;
  preference2: string;
  preference3: string;
}

export interface OrgPreference {
  officerName: string;
  positionName: string;
  bonus: number;
}

export interface Assignment {
  officer: string;
  position: string;
  reward: number;
}

export interface Metrics {
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

export interface MatchingResult {
  success: boolean;
  assignments?: Assignment[];
  metrics?: Metrics;
  error?: string;
}
