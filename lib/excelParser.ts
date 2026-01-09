import * as XLSX from 'xlsx';
import { OfficerPreference, PositionPreference, OrgPreference } from './types';

export function parseOfficerPreferences(file: File): Promise<OfficerPreference[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        
        const preferences: OfficerPreference[] = json.map((row: any) => ({
          officerName: row['Officer Name'],
          currentPosition: row['Current Position'],
          preference1: row['Preference 1'],
          preference2: row['Preference 2'],
          preference3: row['Preference 3'],
        }));
        
        resolve(preferences);
      } catch (error) {
        reject(error);
      }
    };
    
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsBinaryString(file);
  });
}

export function parsePositionPreferences(file: File): Promise<PositionPreference[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        
        const preferences: PositionPreference[] = json.map((row: any) => ({
          positionName: row['Position Name'],
          preference1: row['Preference 1'],
          preference2: row['Preference 2'],
          preference3: row['Preference 3'],
        }));
        
        resolve(preferences);
      } catch (error) {
        reject(error);
      }
    };
    
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsBinaryString(file);
  });
}

export function parseOrgPreferences(file: File): Promise<OrgPreference[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        
        const preferences: OrgPreference[] = json.map((row: any) => ({
          officerName: row['Officer Name'],
          positionName: row['Position Name'],
          bonus: Number(row['Bonus']),
        }));
        
        resolve(preferences);
      } catch (error) {
        reject(error);
      }
    };
    
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsBinaryString(file);
  });
}

export function validateOfficerPreferences(data: OfficerPreference[]): string[] {
  const errors: string[] = [];
  
  if (data.length === 0) {
    errors.push('Officer preferences file is empty');
    return errors;
  }
  
  const officerNames = new Set<string>();
  
  data.forEach((row, index) => {
    const rowNum = index + 2; // Excel row (1-indexed + header)
    
    if (!row.officerName) {
      errors.push(`Row ${rowNum}: Missing officer name`);
    } else if (officerNames.has(row.officerName)) {
      errors.push(`Row ${rowNum}: Duplicate officer name "${row.officerName}"`);
    } else {
      officerNames.add(row.officerName);
    }
    
    if (!row.currentPosition) {
      errors.push(`Row ${rowNum}: Missing current position for ${row.officerName}`);
    }
    
    if (!row.preference1 || !row.preference2 || !row.preference3) {
      errors.push(`Row ${rowNum}: Missing preferences for ${row.officerName}`);
    }
  });
  
  return errors;
}

export function validatePositionPreferences(data: PositionPreference[]): string[] {
  const errors: string[] = [];
  
  if (data.length === 0) {
    errors.push('Position preferences file is empty');
    return errors;
  }
  
  const positionNames = new Set<string>();
  
  data.forEach((row, index) => {
    const rowNum = index + 2;
    
    if (!row.positionName) {
      errors.push(`Row ${rowNum}: Missing position name`);
    } else if (positionNames.has(row.positionName)) {
      errors.push(`Row ${rowNum}: Duplicate position name "${row.positionName}"`);
    } else {
      positionNames.add(row.positionName);
    }
    
    if (!row.preference1 || !row.preference2 || !row.preference3) {
      errors.push(`Row ${rowNum}: Missing preferences for ${row.positionName}`);
    }
  });
  
  return errors;
}
