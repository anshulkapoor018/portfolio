'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import {
  ArrowDownTrayIcon,
  AtSymbolIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  CommandLineIcon,
  EnvelopeIcon,
  FolderOpenIcon,
  HomeIcon,
  MoonIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type CommandAction = {
  id: string;
  label: string;
  hint: string;
  keywords: string;
  icon: React.ReactNode;
  run: () => void;
};

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, systemTheme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  const closePalette = () => {
    setIsOpen(false);
    setQuery('');
    setActiveIndex(0);
  };

  const actions = useMemo<CommandAction[]>(() => [
    {
      id: 'home',
      label: 'Go to Home',
      hint: 'Section',
      keywords: 'hero intro top profile',
      icon: <HomeIcon className="h-5 w-5" aria-hidden="true" />,
      run: () => scrollToSection('home'),
    },
    {
      id: 'experience',
      label: 'Go to Experience',
      hint: 'Section',
      keywords: 'work bill billgo promotion career',
      icon: <BriefcaseIcon className="h-5 w-5" aria-hidden="true" />,
      run: () => scrollToSection('experience'),
    },
    {
      id: 'skills',
      label: 'Go to Skills Map',
      hint: 'Section',
      keywords: 'skills technologies platform architecture',
      icon: <SparklesIcon className="h-5 w-5" aria-hidden="true" />,
      run: () => scrollToSection('skills'),
    },
    {
      id: 'projects',
      label: 'Go to Projects',
      hint: 'Section',
      keywords: 'portfolio apps project work',
      icon: <FolderOpenIcon className="h-5 w-5" aria-hidden="true" />,
      run: () => scrollToSection('projects'),
    },
    {
      id: 'github',
      label: 'Open GitHub',
      hint: 'External',
      keywords: 'code repo repository github',
      icon: <FontAwesomeIcon icon={faGithub} className="h-5 w-5" aria-hidden="true" />,
      run: () => window.open('https://github.com/anshulkapoor018', '_blank', 'noopener,noreferrer'),
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn',
      hint: 'External',
      keywords: 'linkedin profile social',
      icon: <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" aria-hidden="true" />,
      run: () => window.open('https://linkedin.com/in/anshulkapoor018', '_blank', 'noopener,noreferrer'),
    },
    {
      id: 'email',
      label: 'Email Anshul',
      hint: 'Contact',
      keywords: 'mail contact email',
      icon: <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />,
      run: () => {
        window.location.href = 'mailto:anshulkapoor018@gmail.com';
      },
    },
    {
      id: 'copy-email',
      label: 'Copy Email',
      hint: 'Action',
      keywords: 'copy contact email clipboard',
      icon: <AtSymbolIcon className="h-5 w-5" aria-hidden="true" />,
      run: () => navigator.clipboard?.writeText('anshulkapoor018@gmail.com'),
    },
    {
      id: 'resume',
      label: 'Open Resume Drawer',
      hint: 'Action',
      keywords: 'resume cv download pdf',
      icon: <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />,
      run: () => window.dispatchEvent(new Event('portfolio:open-resume')),
    },
    {
      id: 'theme',
      label: isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      hint: 'Theme',
      keywords: 'dark light theme mode',
      icon: <MoonIcon className="h-5 w-5" aria-hidden="true" />,
      run: () => setTheme(isDark ? 'light' : 'dark'),
    },
  ], [isDark, setTheme]);

  const filteredActions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return actions;
    }

    return actions.filter((action) => (
      `${action.label} ${action.hint} ${action.keywords}`.toLowerCase().includes(normalizedQuery)
    ));
  }, [actions, query]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsOpen((open) => !open);
      }

      if (event.key === 'Escape') {
        closePalette();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isOpen]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const runAction = (action: CommandAction) => {
    action.run();
    closePalette();
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, filteredActions.length - 1));
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    }

    if (event.key === 'Enter' && filteredActions[activeIndex]) {
      event.preventDefault();
      runAction(filteredActions[activeIndex]);
    }
  };

  return (
    <>
      <button
        type="button"
        className="portfolio-command-trigger"
        aria-label="Open command palette"
        onClick={() => setIsOpen(true)}
      >
        <CommandLineIcon className="h-5 w-5" aria-hidden="true" />
        <span className="hidden text-xs font-bold sm:inline">⌘K</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/45 px-4 pt-24 backdrop-blur-sm sm:pt-28"
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closePalette();
            }
          }}
        >
          <div className="portfolio-card w-full max-w-xl overflow-hidden shadow-2xl">
            <div className="border-b p-4" style={{ borderColor: 'var(--portfolio-line)' }}>
              <div className="flex items-center gap-3">
                <CommandLineIcon className="h-5 w-5 flex-none" aria-hidden="true" style={{ color: 'var(--portfolio-accent)' }} />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  className="w-full bg-transparent text-base font-semibold outline-none placeholder:font-medium"
                  style={{ color: 'var(--portfolio-text)' }}
                  placeholder="Search sections, links, actions..."
                />
                <span className="portfolio-chip hidden px-2.5 py-1 text-xs sm:inline">Esc</span>
              </div>
            </div>

            <div className="max-h-[420px] overflow-y-auto p-2">
              {filteredActions.length > 0 ? (
                filteredActions.map((action, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={action.id}
                      type="button"
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{
                        background: isActive ? 'var(--portfolio-bg)' : 'transparent',
                        color: 'var(--portfolio-text)',
                        outlineColor: 'var(--portfolio-accent)',
                      }}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => runAction(action)}
                    >
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg" style={{ background: 'var(--portfolio-bg)', color: 'var(--portfolio-accent)' }}>
                        {action.icon}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold">{action.label}</span>
                        <span className="portfolio-muted block text-xs">{action.hint}</span>
                      </span>
                    </button>
                  );
                })
              ) : (
                <div className="portfolio-muted px-3 py-8 text-center text-sm">
                  No commands found.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommandPalette;
