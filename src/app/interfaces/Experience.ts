export interface Experience {
    logo: string;
    dateStart: string;
    dateEnd: string;
    position: string;
    company: string;
    companyUrl: string;
    experienceDetails: string;
  }
  
  export interface ExperienceTimelineProps {
    experienceData: Experience[];
  }