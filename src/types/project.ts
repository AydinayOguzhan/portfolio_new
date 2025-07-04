export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  image: string;
  github: string | null;
  live: string | null;
  featured: boolean;
  category: string;
  startDate: string;
  endDate: string | null;
  status: string;
} 