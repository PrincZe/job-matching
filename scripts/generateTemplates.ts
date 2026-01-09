import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

// Create public/templates directory if it doesn't exist
const templatesDir = path.join(process.cwd(), 'public', 'templates');
if (!fs.existsSync(templatesDir)) {
  fs.mkdirSync(templatesDir, { recursive: true });
}

// Officer template
const officerData = [
  {
    'Officer Name': 'John Tan',
    'Current Position': 'Analyst (Data Office)',
    'Preference 1': 'Manager (Finance)',
    'Preference 2': 'Analyst (Policy)',
    'Preference 3': 'Manager (HR)'
  },
  {
    'Officer Name': 'Sarah Lee',
    'Current Position': 'Manager (HR)',
    'Preference 1': 'Analyst (Data Office)',
    'Preference 2': 'Analyst (Policy)',
    'Preference 3': 'Manager (Finance)'
  },
  {
    'Officer Name': 'David Lim',
    'Current Position': 'Analyst (Policy)',
    'Preference 1': 'Manager (Finance)',
    'Preference 2': 'Manager (HR)',
    'Preference 3': 'Analyst (Data Office)'
  }
];

const wsOfficer = XLSX.utils.json_to_sheet(officerData);
const wbOfficer = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wbOfficer, wsOfficer, 'Officers');
XLSX.writeFile(wbOfficer, path.join(templatesDir, 'officer_preferences.xlsx'));

// Position template
const positionData = [
  {
    'Position Name': 'Manager (Finance)',
    'Preference 1': 'John Tan',
    'Preference 2': 'Sarah Lee',
    'Preference 3': 'David Lim'
  },
  {
    'Position Name': 'Analyst (Policy)',
    'Preference 1': 'Sarah Lee',
    'Preference 2': 'John Tan',
    'Preference 3': 'David Lim'
  },
  {
    'Position Name': 'Manager (HR)',
    'Preference 1': 'David Lim',
    'Preference 2': 'John Tan',
    'Preference 3': 'Sarah Lee'
  },
  {
    'Position Name': 'Analyst (Data Office)',
    'Preference 1': 'Sarah Lee',
    'Preference 2': 'David Lim',
    'Preference 3': 'John Tan'
  }
];

const wsPosition = XLSX.utils.json_to_sheet(positionData);
const wbPosition = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wbPosition, wsPosition, 'Positions');
XLSX.writeFile(wbPosition, path.join(templatesDir, 'position_preferences.xlsx'));

// Org template
const orgData = [
  {
    'Officer Name': 'John Tan',
    'Position Name': 'Manager (Finance)',
    'Bonus': 2
  },
  {
    'Officer Name': 'Sarah Lee',
    'Position Name': 'Analyst (Policy)',
    'Bonus': -3
  }
];

const wsOrg = XLSX.utils.json_to_sheet(orgData);
const wbOrg = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wbOrg, wsOrg, 'Organization');
XLSX.writeFile(wbOrg, path.join(templatesDir, 'org_preferences.xlsx'));

console.log('Excel templates generated successfully in public/templates/');
