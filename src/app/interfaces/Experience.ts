export interface Experience {
    logo: string;
    dateStart: string;
    dateEnd: string;
    position: string;
    company: string;
    companyUrl: string;
    experienceDetails: string;
    featured?: boolean;
    tags?: string[];
  }
  
  export interface ExperienceTimelineProps {
    experienceData: Experience[];
  }
