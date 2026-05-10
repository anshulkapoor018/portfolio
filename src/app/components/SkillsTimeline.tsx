import { SkillGroup } from '../interfaces/Skills';

interface SkillsTimelineProps {
    skillGroups: SkillGroup[];
}

const SkillsTimeline: React.FC<SkillsTimelineProps> = ({ skillGroups }) => {
  return (
    <section className="portfolio-section">
        <div className="portfolio-container">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
                <div className="col-span-12 sm:col-span-3">
                    <div className="portfolio-section-kicker text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 ">
                        <h3 className="portfolio-section-title">Skills</h3>
                        <p className="portfolio-muted mt-4 text-sm leading-6">
                            Grouped around the systems I build and maintain.
                        </p>
                    </div>
                </div>
                <div className="relative col-span-12 px-4 sm:col-span-9">
                    <div className="space-y-4">
                        {skillGroups.map((group) => (
                            <article
                                key={group.category}
                                className="rounded-2xl border p-5"
                                style={{
                                    background: 'var(--portfolio-surface)',
                                    borderColor: 'var(--portfolio-line)',
                                }}
                            >
                                <div className="grid gap-4 sm:grid-cols-[150px_minmax(0,1fr)] sm:items-start">
                                    <h4 className="text-lg font-bold">{group.category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full border px-3 py-1.5 text-sm font-semibold"
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
