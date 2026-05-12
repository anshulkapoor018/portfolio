export interface Project {
  dateStart: string;
  dateEnd: string;
  name: string;
  stack: string[];
  projectDetails: string;
  featured?: boolean;
  role?: string;
  status?: string;
  accent?: string;
  links?: ProjectLink[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectsTimelineProps {
  projectsData: Project[];
}
