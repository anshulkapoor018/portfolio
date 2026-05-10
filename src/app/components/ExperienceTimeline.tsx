import { ExperienceTimelineProps } from '../interfaces/Experience';
import LogoFrame from './LogoFrame';

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experienceData }) => {
  return (
    <section className="portfolio-section">
        <div className="portfolio-container">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
                <div className="col-span-12 sm:col-span-3">
                    <div className="portfolio-section-kicker text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0">
                        <h3 className="portfolio-section-title">Experience</h3>
                    </div>
                </div>
                <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                    <div className="portfolio-timeline col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3">
                        {experienceData.map((experience, index) => (
                            <div key={index} className="portfolio-timeline-item flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1]">
                                <div className='flex'>
                                    <LogoFrame src={experience.logo} alt={`${experience.company} logo`} />
                                    <div>
                                        <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold tracking-wide hover:underline">
                                            {experience.company}
                                        </a>
                                        <h4 className="text-s font-semibold tracking-wide">{experience.position}</h4>
                                        <time className="portfolio-subtle text-xs tracking-wide uppercase">{experience.dateStart} - {experience.dateEnd}</time>
                                    </div>
                                </div>
                                <ul className="mt-3 list-disc list-inside">
                                {experience.experienceDetails.split('\n').map((detail, index) => {
                                    const trimmedDetail = detail.trim().startsWith('-') ? detail.trim().substring(1).trim() : detail.trim();
                                    return <li key={index}>{trimmedDetail}</li>;
                                })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default ExperienceTimeline;
