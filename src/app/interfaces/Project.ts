export interface Project {
  dateStart: string;
  dateEnd: string;
  name: string;
  stack: string[];
  projectDetails: string;
  featured?: boolean;
}

export interface ProjectsTimelineProps {
  projectsData: Project[];
}
