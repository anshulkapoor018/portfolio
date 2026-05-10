export interface Project {
  dateStart: string;
  dateEnd: string;
  name: string;
  stack: string;
  projectDetails: string;
}

export interface ProjectsTimelineProps {
  projectsData: Project[];
}
