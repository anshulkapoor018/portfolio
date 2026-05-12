'use client';

import { useEffect, useState } from 'react';
import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  AtSymbolIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const resumeUrl = '/Anshul_Kapoor_Resume.pdf';

const highlights = [
  'Software Engineer focused on fintech frontend platforms and microfrontend modernization.',
  'Current work at BILL across Accounts Receivable workflows, Angular, React, and GraphQL.',
  'Previously led reusable SDK and UI platform work at BillGo with promotion from Engineer II to III.',
];

const ResumeDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openDrawer = () => setIsOpen(true);

    window.addEventListener('portfolio:open-resume', openDrawer);
    return () => window.removeEventListener('portfolio:open-resume', openDrawer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="portfolio-hero-action"
        onClick={() => setIsOpen(true)}
      >
        <DocumentTextIcon className="h-5 w-5" aria-hidden="true" />
        View Resume
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-end bg-black/50 backdrop-blur-sm sm:items-stretch"
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <aside className="portfolio-card max-h-[92vh] w-full overflow-hidden rounded-b-none shadow-2xl sm:h-full sm:max-h-none sm:max-w-xl sm:rounded-none sm:border-y-0 sm:border-r-0">
            <div className="flex items-start justify-between gap-4 border-b p-5 sm:p-6" style={{ borderColor: 'var(--portfolio-line)' }}>
              <div>
                <p className="portfolio-subtle text-xs font-semibold uppercase tracking-wide">Latest resume</p>
                <h2 className="mt-2 text-2xl font-bold tracking-normal">Anshul Kapoor</h2>
                <p className="portfolio-muted mt-1 text-sm">Software Engineer · Product & Platform Engineering</p>
              </div>
              <button
                type="button"
                className="portfolio-theme-toggle flex-none"
                aria-label="Close resume preview"
                onClick={() => setIsOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="grid max-h-[calc(92vh-88px)] gap-5 overflow-y-auto p-5 sm:max-h-[calc(100vh-96px)] sm:p-6">
              <div className="grid gap-3 sm:grid-cols-3">
                <a className="portfolio-resume-action" href={resumeUrl} download>
                  <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
                  Download
                </a>
                <a className="portfolio-resume-action" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  <ArrowTopRightOnSquareIcon className="h-5 w-5" aria-hidden="true" />
                  Open PDF
                </a>
                <button
                  type="button"
                  className="portfolio-resume-action"
                  onClick={() => navigator.clipboard?.writeText('anshulkapoor018@gmail.com')}
                >
                  <AtSymbolIcon className="h-5 w-5" aria-hidden="true" />
                  Copy Email
                </button>
              </div>

              <div className="portfolio-card p-4">
                <div className="flex items-center gap-2">
                  <BriefcaseIcon className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--portfolio-accent)' }} />
                  <h3 className="font-bold">Highlights</h3>
                </div>
                <ul className="portfolio-muted mt-4 space-y-3">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6">
                      <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full" style={{ background: 'var(--portfolio-accent)' }} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border bg-white p-6 text-slate-900 shadow-sm" style={{ borderColor: 'var(--portfolio-line)' }}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">Resume Preview</p>
                <h3 className="mt-3 text-3xl font-bold tracking-normal">Anshul Kapoor</h3>
                <p className="mt-1 text-sm font-semibold text-slate-600">Software Engineer · Product & Platform Engineering</p>
                <div className="mt-5 h-px bg-slate-200" />
                <div className="mt-5 grid gap-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Current Focus</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Modernizing BILL Accounts Receivable workflows with scalable frontend architecture,
                      GraphQL-driven systems, and AI-assisted engineering practices.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Experience Snapshot</p>
                    <div className="mt-3 space-y-3 text-sm">
                      <div>
                        <p className="font-bold">BILL · Software Engineer II</p>
                        <p className="text-slate-500">Jun 2024 - Present</p>
                      </div>
                      <div>
                        <p className="font-bold">BillGo · Software Engineer III</p>
                        <p className="text-slate-500">Feb 2023 - Mar 2024</p>
                      </div>
                      <div>
                        <p className="font-bold">BillGo · Software Engineer II</p>
                        <p className="text-slate-500">Jul 2021 - Jan 2023</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Core Stack</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['Angular', 'React', 'TypeScript', 'GraphQL', 'Microfrontends', 'React Native'].map((item) => (
                        <span key={item} className="rounded-full border border-slate-300 px-3 py-1 text-xs font-bold text-slate-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default ResumeDrawer;
