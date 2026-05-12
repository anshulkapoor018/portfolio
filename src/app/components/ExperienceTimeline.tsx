import { ExperienceTimelineProps } from '../interfaces/Experience';
import LogoFrame from './LogoFrame';

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experienceData }) => {
  const featuredExperience = experienceData.filter((experience) => experience.featured);
  const earlierExperience = experienceData.filter((experience) => !experience.featured);

  const featuredGroups = featuredExperience.reduce<Array<{ companyKey: string; roles: typeof featuredExperience }>>((groups, experience) => {
    const companyKey = `${experience.company}-${experience.companyUrl}`;
    const existingGroup = groups.find((group) => group.companyKey === companyKey);

    if (existingGroup) {
      existingGroup.roles.push(experience);
      return groups;
    }

    return [...groups, { companyKey, roles: [experience] }];
  }, []);

  const getDetails = (details: string) => (
    details
      .split('\n')
      .map((detail) => detail.trim().startsWith('-') ? detail.trim().substring(1).trim() : detail.trim())
      .filter(Boolean)
  );

  return (
    <section id="experience" className="portfolio-section">
        <div className="portfolio-container">
            <div className="grid gap-8 sm:grid-cols-12">
                <div className="col-span-12 sm:col-span-3">
                    <div className="portfolio-section-kicker mb-8 text-center before:mx-auto before:mb-5 before:block before:h-3 before:w-24 before:rounded-md sm:sticky sm:top-8 sm:mb-14 sm:text-left sm:before:mx-0">
                        <h3 className="portfolio-section-title">Experience</h3>
                    </div>
                </div>
                <div className="relative col-span-12 sm:col-span-9">
                    <div className="space-y-6">
                        {featuredGroups.map(({ companyKey, roles }) => {
                          const companyExperience = roles[0];
                          const isPromotionGroup = roles.length > 1;
                          const firstRole = roles[0];
                          const lastRole = roles[roles.length - 1];

                          return (
                            <article
                              key={companyKey}
                              className="portfolio-card p-5 sm:p-6"
                            >
                              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                                <LogoFrame src={companyExperience.logo} alt={`${companyExperience.company} logo`} />
                                <div className="min-w-0 flex-1">
                                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                      <a href={companyExperience.companyUrl} target="_blank" rel="noopener noreferrer" className="portfolio-link text-2xl font-bold tracking-normal hover:underline">
                                        {companyExperience.company}
                                      </a>
                                      {isPromotionGroup && (
                                        <p className="portfolio-muted text-sm font-semibold">
                                          Full-time · {lastRole.dateStart} - {firstRole.dateEnd}
                                        </p>
                                      )}
                                    </div>
                                    {!isPromotionGroup && (
                                      <time className="portfolio-subtle text-xs font-semibold tracking-wide uppercase sm:pt-2">
                                        {firstRole.dateStart} - {firstRole.dateEnd}
                                      </time>
                                    )}
                                  </div>

                                  {!isPromotionGroup && (
                                    <>
                                      <h4 className="font-semibold tracking-wide">{firstRole.position}</h4>
                                      {firstRole.tags && (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                          {firstRole.tags.map((tag) => (
                                            <span
                                              key={tag}
                                              className="portfolio-chip px-3 py-1.5 text-xs"
                                            >
                                              {tag}
                                            </span>
                                          ))}
                                        </div>
                                      )}

                                      <ul className="portfolio-muted mt-5 space-y-3">
                                        {getDetails(firstRole.experienceDetails).map((detail, index) => (
                                          <li key={index} className="flex gap-3 leading-7">
                                            <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full" style={{ background: 'var(--portfolio-accent)' }} />
                                            <span>{detail}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </>
                                  )}

                                  {isPromotionGroup && (
                                    <div className="relative mt-6 space-y-6 pl-5">
                                      <span
                                        className="absolute bottom-0 left-0 top-2 w-px"
                                        style={{ background: 'var(--portfolio-line)' }}
                                        aria-hidden="true"
                                      />
                                      {roles.map((role, index) => (
                                        <div key={`${role.position}-${role.dateStart}`} className="relative">
                                          <span
                                            className="absolute -left-[27px] top-2 h-3 w-3 rounded-full"
                                            style={{
                                              background: 'var(--portfolio-accent)',
                                              boxShadow: '0 0 0 4px var(--portfolio-surface)',
                                            }}
                                          />
                                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                            <div>
                                              <div className="flex flex-wrap items-center gap-2">
                                                <h4 className="font-semibold tracking-wide">{role.position}</h4>
                                                {index === 0 && (
                                                  <span className="portfolio-chip px-2.5 py-1 text-xs">
                                                    Promotion
                                                  </span>
                                                )}
                                              </div>
                                              <time className="portfolio-subtle text-xs font-semibold tracking-wide uppercase">
                                                {role.dateStart} - {role.dateEnd}
                                              </time>
                                            </div>
                                          </div>

                                          {role.tags && (
                                            <div className="mt-4 flex flex-wrap gap-2">
                                              {role.tags.map((tag) => (
                                                <span
                                                  key={tag}
                                                  className="portfolio-chip px-3 py-1.5 text-xs"
                                                >
                                                  {tag}
                                                </span>
                                              ))}
                                            </div>
                                          )}

                                          <ul className="portfolio-muted mt-4 space-y-3">
                                            {getDetails(role.experienceDetails).map((detail, detailIndex) => (
                                              <li key={detailIndex} className="flex gap-3 leading-7">
                                                <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full" style={{ background: 'var(--portfolio-accent)' }} />
                                                <span>{detail}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </article>
                          );
                        })}

                        <div className="pt-4">
                          <h4 className="text-xl font-bold tracking-normal">Earlier Experience</h4>
                          <div className="mt-4 grid gap-4 md:grid-cols-3">
                            {earlierExperience.map((experience) => {
                              const detail = getDetails(experience.experienceDetails)[0];

                              return (
                                <article
                                  key={`${experience.company}-${experience.position}`}
                                  className="portfolio-card p-4"
                                >
                                  <div className="flex flex-col gap-3">
                                    <LogoFrame src={experience.logo} alt={`${experience.company} logo`} size="sm" />
                                    <div>
                                      <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="portfolio-link font-bold hover:underline">
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
