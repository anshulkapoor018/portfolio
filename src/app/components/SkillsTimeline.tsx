'use client';

import { useMemo, useState } from 'react';
import type { SkillGroup } from '../interfaces/Skills';

interface SkillsTimelineProps {
    skillGroups: SkillGroup[];
}

const categoryMeta: Record<string, { x: number; y: number; summary: string; related: string[] }> = {
    Frontend: {
        x: 18,
        y: 22,
        summary: 'Product surfaces, design systems, and modern frontend stacks.',
        related: ['BILL AR workflows', 'Microfrontend UI', 'React Native tooling'],
    },
    Architecture: {
        x: 70,
        y: 18,
        summary: 'Shared platform patterns for scalable product delivery.',
        related: ['Microfrontends', 'GraphQL systems', 'SDK modernization'],
    },
    'Cloud & Tooling': {
        x: 76,
        y: 64,
        summary: 'Automation, observability, quality gates, and release confidence.',
        related: ['GitHub Actions', 'CloudWatch', 'Testing velocity'],
    },
    'Backend & Data': {
        x: 24,
        y: 70,
        summary: 'Service foundations and data layers that support product workflows.',
        related: ['Node.js APIs', 'Databases', 'Python services'],
    },
    'Product Engineering': {
        x: 48,
        y: 86,
        summary: 'Feature delivery habits that connect engineering choices to outcomes.',
        related: ['Feature flags', 'Analytics', 'Performance'],
    },
};

const SkillsTimeline: React.FC<SkillsTimelineProps> = ({ skillGroups }) => {
  const [activeCategory, setActiveCategory] = useState(skillGroups[0]?.category ?? '');
  const activeGroup = useMemo(
    () => skillGroups.find((group) => group.category === activeCategory) ?? skillGroups[0],
    [activeCategory, skillGroups],
  );
  const activeMeta = activeGroup ? categoryMeta[activeGroup.category] : undefined;

  return (
    <section id="skills" className="portfolio-section">
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
                    <div className="portfolio-card overflow-hidden">
                        <div className="grid gap-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
                            <div className="relative min-h-[420px] p-5 sm:p-6">
                                <div
                                    className="absolute inset-0 opacity-40"
                                    style={{
                                        backgroundImage: 'radial-gradient(var(--portfolio-line) 1px, transparent 1px)',
                                        backgroundSize: '28px 28px',
                                    }}
                                />
                                <svg
                                    className="pointer-events-none absolute inset-0 h-full w-full"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    {skillGroups.map((group) => {
                                        const meta = categoryMeta[group.category];
                                        if (!meta) return null;

                                        return (
                                            <line
                                                key={group.category}
                                                x1="50"
                                                y1="50"
                                                x2={meta.x}
                                                y2={meta.y}
                                                stroke={group.category === activeCategory ? 'var(--portfolio-accent)' : 'var(--portfolio-line)'}
                                                strokeWidth={group.category === activeCategory ? '0.8' : '0.35'}
                                                opacity={group.category === activeCategory ? '0.9' : '0.45'}
                                            />
                                        );
                                    })}
                                </svg>

                                <button
                                    type="button"
                                    className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-center text-xs font-bold shadow-sm transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:h-28 sm:w-28 sm:text-sm"
                                    style={{
                                        background: 'var(--portfolio-accent)',
                                        borderColor: 'var(--portfolio-accent)',
                                        color: '#ffffff',
                                        outlineColor: 'var(--portfolio-accent)',
                                    }}
                                    onClick={() => setActiveCategory('Product Engineering')}
                                >
                                    Platform Engineering
                                </button>

                                {skillGroups.map((group) => {
                                    const meta = categoryMeta[group.category];
                                    if (!meta) return null;
                                    const isActive = group.category === activeCategory;

                                    return (
                                        <button
                                            key={group.category}
                                            type="button"
                                            className="absolute z-10 min-w-28 rounded-lg border px-2.5 py-2 text-left text-xs font-bold shadow-sm transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:min-w-32 sm:px-3 sm:text-sm"
                                            style={{
                                                left: `${meta.x}%`,
                                                top: `${meta.y}%`,
                                                transform: 'translate(-50%, -50%)',
                                                background: isActive ? 'var(--portfolio-accent)' : 'var(--portfolio-surface)',
                                                borderColor: isActive ? 'var(--portfolio-accent)' : 'var(--portfolio-line)',
                                                color: isActive ? '#ffffff' : 'var(--portfolio-text)',
                                                outlineColor: 'var(--portfolio-accent)',
                                            }}
                                            onMouseEnter={() => setActiveCategory(group.category)}
                                            onFocus={() => setActiveCategory(group.category)}
                                            onClick={() => setActiveCategory(group.category)}
                                        >
                                            {group.category}
                                        </button>
                                    );
                                })}
                            </div>

                            <aside
                                className="border-t p-5 sm:p-6 lg:border-l lg:border-t-0"
                                style={{ borderColor: 'var(--portfolio-line)' }}
                            >
                                <p className="portfolio-subtle text-xs font-semibold uppercase tracking-wide">Active cluster</p>
                                <h4 className="mt-2 text-2xl font-bold tracking-normal">{activeGroup?.category}</h4>
                                {activeMeta && (
                                    <p className="portfolio-muted mt-3 text-sm leading-6">
                                        {activeMeta.summary}
                                    </p>
                                )}

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {activeGroup?.items.map((item) => (
                                        <span
                                            key={item}
                                            className="portfolio-chip px-3 py-1.5 text-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                {activeMeta && (
                                    <div className="mt-6">
                                        <p className="portfolio-subtle text-xs font-semibold uppercase tracking-wide">Related work</p>
                                        <ul className="portfolio-muted mt-3 space-y-3">
                                            {activeMeta.related.map((item) => (
                                                <li key={item} className="flex gap-3 text-sm leading-6">
                                                    <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full" style={{ background: 'var(--portfolio-accent)' }} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default SkillsTimeline;
