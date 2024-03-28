export interface Experience {
    logo: string;
    dateStart: string;
    dateEnd: string;
    position: string;
    company: string;
    experienceDetails: string;
  }
  
  export interface ExperienceTimelineProps {
    experienceData: Experience[];
  }