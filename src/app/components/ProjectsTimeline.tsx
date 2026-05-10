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
                  className="portfolio-card p-5"
                >
                  <h4 className="text-xl font-bold tracking-normal">{project.name}</h4>
                  <time className="portfolio-subtle mt-1 block text-xs font-semibold tracking-wide uppercase">
                    {project.dateStart} - {project.dateEnd}
                  </time>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="portfolio-chip px-2.5 py-1 text-xs"
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
