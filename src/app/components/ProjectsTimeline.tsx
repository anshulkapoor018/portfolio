import { ProjectsTimelineProps } from '../interfaces/Project';

const ProjectsTimeline: React.FC<ProjectsTimelineProps> = ({ projectsData }) => {
  const featuredProjects = projectsData.filter((project) => project.featured);

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
              <h3 className="portfolio-section-title">Projects</h3>
              <p className="portfolio-muted mt-4 text-sm leading-6">
                A few representative builds from earlier work.
              </p>
            </div>
          </div>
          <div className="relative col-span-12 px-4 sm:col-span-9">
            <div className="grid gap-4 md:grid-cols-3">
              {featuredProjects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-2xl border p-5"
                  style={{
                    background: 'var(--portfolio-surface)',
                    borderColor: 'var(--portfolio-line)',
                  }}
                >
                  <h4 className="text-xl font-bold tracking-normal">{project.name}</h4>
                  <time className="portfolio-subtle mt-1 block text-xs font-semibold tracking-wide uppercase">
                    {project.dateStart} - {project.dateEnd}
                  </time>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border px-2.5 py-1 text-xs font-semibold"
                        style={{
                          background: 'var(--portfolio-bg)',
                          borderColor: 'var(--portfolio-line)',
                          color: 'var(--portfolio-text)',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="portfolio-muted mt-5 text-sm leading-6">{getDetails(project.projectDetails)[0]}</p>
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
