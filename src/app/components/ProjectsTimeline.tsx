import { ProjectsTimelineProps } from '../interfaces/Project';

const projectInitials = (name: string) => (
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
);

const ProjectsTimeline: React.FC<ProjectsTimelineProps> = ({ projectsData }) => {
  const featuredProjects = projectsData.filter((project) => project.featured);

  const getDetails = (details: string) => (
    details
      .split('\n')
      .map((detail) => detail.trim().startsWith('-') ? detail.trim().substring(1).trim() : detail.trim())
      .filter(Boolean)
  );

  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-container">
        <div className="grid gap-8 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="portfolio-section-kicker mb-8 text-center before:mx-auto before:mb-5 before:block before:h-3 before:w-24 before:rounded-md sm:sticky sm:top-8 sm:mb-14 sm:text-left sm:before:mx-0">
              <h3 className="portfolio-section-title">Projects</h3>
              <p className="portfolio-muted mt-4 text-sm leading-6">
                A few representative builds from earlier work.
              </p>
            </div>
          </div>
          <div className="relative col-span-12 sm:col-span-9">
            <div className="grid gap-4 md:grid-cols-3">
              {featuredProjects.map((project) => (
                <article
                  key={project.name}
                  className="portfolio-card flex min-h-[360px] flex-col overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className="relative flex h-28 items-end overflow-hidden p-5"
                    style={{ background: project.accent ?? 'var(--portfolio-accent)' }}
                  >
                    <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-lg border border-white/35 bg-white/15 text-lg font-bold text-white backdrop-blur">
                      {projectInitials(project.name)}
                    </div>
                    <span className="absolute right-5 top-5 rounded-full border border-white/40 px-2.5 py-1 text-xs font-bold text-white">
                      {project.status}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h4 className="text-lg font-bold leading-7 tracking-normal sm:text-xl">{project.name}</h4>
                    <p className="portfolio-muted mt-1 text-sm font-semibold">{project.role}</p>
                    <time className="portfolio-subtle mt-2 block text-xs font-semibold tracking-wide uppercase">
                      {project.dateStart} - {project.dateEnd}
                    </time>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="portfolio-live-badge"
                        >
                          <span className="h-1.5 w-1.5 rounded-full" style={{ background: project.accent ?? 'var(--portfolio-accent)' }} />
                          {item}
                        </span>
                      ))}
                    </div>

                    <p className="portfolio-muted mt-5 text-sm leading-6">{getDetails(project.projectDetails)[0]}</p>
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

export default ProjectsTimeline;
