import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Project } from '../../../types/project';

export async function GET() {
  try {
    const projectsPath = path.join(process.cwd(), 'src', 'data', 'projects.json');
    const projectsData = fs.readFileSync(projectsPath, 'utf8');
    const projects: Project[] = JSON.parse(projectsData);
    
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error reading projects data:', error);
    return NextResponse.json({ error: 'Failed to load projects' }, { status: 500 });
  }
} 