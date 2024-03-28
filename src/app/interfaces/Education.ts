export interface Education {
    logo: string;
    dateStart: string;
    dateEnd: string;
    location: string;
    college: string;
    collegeUrl: string;
    experienceDetails: string;
}
  
export interface EducationTimelineProps {
    educationData: Education[];
}