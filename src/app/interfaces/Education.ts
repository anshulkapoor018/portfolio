export interface Education {
    logo: string;
    dateStart: string;
    dateEnd: string;
    position: string;
    company: string;
    experienceDetails: string;
}
  
export interface EducationTimelineProps {
    educationData: Education[];
}