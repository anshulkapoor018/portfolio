import { SkillGroup } from '../interfaces/Skills';

interface SkillsTimelineProps {
    skillGroups: SkillGroup[];
}

const SkillsTimeline: React.FC<SkillsTimelineProps> = ({ skillGroups }) => {
  return (
    <section className="portfolio-section">
        <div className="portfolio-container">
            <div className="grid gap-8 sm:grid-cols-12">
                <div className="col-span-12 sm:col-span-3">
                    <div className="portfolio-section-kicker mb-8 text-center before:mx-auto before:mb-5 before:block before:h-3 before:w-24 before:rounded-md sm:sticky sm:top-8 sm:mb-14 sm:text-left sm:before:mx-0">
                        <h3 className="portfolio-section-title">Skills</h3>
                        <p className="portfolio-muted mt-4 text-sm leading-6">
                            Grouped around the systems I build and maintain.
                        </p>
                    </div>
                </div>
                <div className="relative col-span-12 sm:col-span-9">
                    <div className="space-y-4">
                        {skillGroups.map((group) => (
                            <article
                                key={group.category}
                                className="portfolio-card p-5"
                            >
                                <div className="grid gap-4 sm:grid-cols-[150px_minmax(0,1fr)] sm:items-start">
                                    <h4 className="text-lg font-bold">{group.category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <span
                                                key={item}
                                                className="portfolio-chip px-3 py-1.5 text-sm"
                                            >
                                                {item}
                                            </span>
                                        ))}
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

export default SkillsTimeline;
