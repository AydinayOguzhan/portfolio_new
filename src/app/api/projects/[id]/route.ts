import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Project } from '../../../../types/project';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const projectsPath = path.join(process.cwd(), 'src', 'data', 'projects.json');
    const projectsData = fs.readFileSync(projectsPath, 'utf8');
    const projects: Project[] = JSON.parse(projectsData);
    
    const project = projects.find((p: Project) => p.id === params.id);
    
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    
    return NextResponse.json(project);
  } catch (error) {
    console.error('Error reading project data:', error);
    return NextResponse.json({ error: 'Failed to load project' }, { status: 500 });
  }
} 