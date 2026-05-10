import { EducationTimelineProps } from '../interfaces/Education';
import LogoFrame from './LogoFrame';

const EducationTimeline: React.FC<EducationTimelineProps> = ({ educationData }) => {
  return (
    <section className="portfolio-section">
        <div className="portfolio-container">
            <div className="grid gap-8 sm:grid-cols-12">
                <div className="col-span-12 sm:col-span-3">
                    <div className="portfolio-section-kicker mb-8 text-center before:mx-auto before:mb-5 before:block before:h-3 before:w-24 before:rounded-md sm:sticky sm:top-8 sm:mb-14 sm:text-left sm:before:mx-0">
                        <h3 className="portfolio-section-title">Education</h3>
                    </div>
                </div>
                <div className="relative col-span-12 sm:col-span-9">
                    <div className="space-y-4">
                        {educationData.map((education) => (
                            <article key={education.college} className="portfolio-card p-5 sm:p-6">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                                    <LogoFrame src={education.logo} alt={`${education.college} logo`} />
                                    <div className="min-w-0 flex-1">
                                        <a
                                            href={education.collegeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl font-semibold tracking-wide hover:underline"
                                        >
                                            {education.college}
                                        </a>
                                        <h4 className="text-sm font-semibold tracking-wide">{education.location}</h4>
                                        <time className="portfolio-subtle text-xs tracking-wide uppercase">
                                            {education.dateStart} - {education.dateEnd}
                                        </time>
                                        <ul className="portfolio-muted mt-4 space-y-3">
                                            {education.experienceDetails.split('\n').map((detail, index) => {
                                                const trimmedDetail = detail.trim().startsWith('-') ? detail.trim().substring(1).trim() : detail.trim();

                                                return (
                                                    <li key={index} className="flex gap-3 leading-7">
                                                        <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full" style={{ background: 'var(--portfolio-accent)' }} />
                                                        <span>{trimmedDetail}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default EducationTimeline;
