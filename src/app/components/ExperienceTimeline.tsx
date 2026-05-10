import { ExperienceTimelineProps } from '../interfaces/Experience';
import LogoFrame from './LogoFrame';

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experienceData }) => {
  const featuredExperience = experienceData.filter((experience) => experience.featured);
  const earlierExperience = experienceData.filter((experience) => !experience.featured);

  const getDetails = (details: string) => (
    details
      .split('\n')
      .map((detail) => detail.trim().startsWith('-') ? detail.trim().substring(1).trim() : detail.trim())
      .filter(Boolean)
  );

  return (
    <section className="portfolio-section">
        <div className="portfolio-container">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
                <div className="col-span-12 sm:col-span-3">
                    <div className="portfolio-section-kicker text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0">
                        <h3 className="portfolio-section-title">Experience</h3>
                        <p className="portfolio-muted mt-4 text-sm leading-6">
                          Selected platform work, condensed for fast scanning.
                        </p>
                    </div>
                </div>
                <div className="relative col-span-12 px-4 sm:col-span-9">
                    <div className="space-y-6">
                        {featuredExperience.map((experience, index) => (
                            <article
                              key={`${experience.company}-${experience.position}-${index}`}
                              className="rounded-2xl border p-6 shadow-sm"
                              style={{
                                background: 'var(--portfolio-surface)',
                                borderColor: 'var(--portfolio-line)',
                              }}
                            >
                              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                                <LogoFrame src={experience.logo} alt={`${experience.company} logo`} />
                                <div className="min-w-0 flex-1">
                                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                      <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold tracking-normal hover:underline">
                                        {experience.company}
                                      </a>
                                      <h4 className="font-semibold tracking-wide">{experience.position}</h4>
                                    </div>
                                    <time className="portfolio-subtle text-xs font-semibold tracking-wide uppercase sm:pt-2">
                                      {experience.dateStart} - {experience.dateEnd}
                                    </time>
                                  </div>

                                  {experience.tags && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                      {experience.tags.map((tag) => (
                                        <span
                                          key={tag}
                                          className="rounded-full border px-3 py-1.5 text-xs font-semibold"
                                          style={{
                                            background: 'var(--portfolio-bg)',
                                            borderColor: 'var(--portfolio-line)',
                                            color: 'var(--portfolio-text)',
                                          }}
                                        >
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                  )}

                                  <ul className="portfolio-muted mt-5 space-y-3">
                                    {getDetails(experience.experienceDetails).map((detail, index) => (
                                      <li key={index} className="flex gap-3 leading-7">
                                        <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full" style={{ background: 'var(--portfolio-accent)' }} />
                                        <span>{detail}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </article>
                        ))}

                        <div className="pt-4">
                          <h4 className="text-xl font-bold tracking-normal">Earlier Experience</h4>
                          <div className="mt-4 grid gap-4 md:grid-cols-3">
                            {earlierExperience.map((experience) => {
                              const detail = getDetails(experience.experienceDetails)[0];

                              return (
                                <article
                                  key={`${experience.company}-${experience.position}`}
                                  className="rounded-xl border p-4"
                                  style={{
                                    background: 'var(--portfolio-surface)',
                                    borderColor: 'var(--portfolio-line)',
                                  }}
                                >
                                  <div className="flex flex-col gap-3">
                                    <LogoFrame src={experience.logo} alt={`${experience.company} logo`} size="sm" />
                                    <div>
                                      <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">
                                        {experience.company}
                                      </a>
                                      <p className="portfolio-muted text-sm font-semibold">{experience.position}</p>
                                      <time className="portfolio-subtle text-xs font-semibold uppercase">
                                        {experience.dateStart} - {experience.dateEnd}
                                      </time>
                                    </div>
                                  </div>
                                  <p className="portfolio-muted mt-4 text-sm leading-6">{detail}</p>
                                </article>
                              );
                            })}
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default ExperienceTimeline;
