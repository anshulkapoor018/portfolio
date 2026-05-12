'use client'
import Image from 'next/image';
import Link from 'next/link';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSquarePhoneFlip } from '@fortawesome/free-solid-svg-icons';
import ResumeDrawer from './ResumeDrawer';
import HeroConstellation from './HeroConstellation';
config.autoAddCss = false;

const expertise = [
  'Frontend Architecture',
  'Microfrontends',
  'GraphQL',
  'AI-Assisted Engineering',
  'Fintech Platforms',
];

const Header = () => {
    return (
      <header id="home" className="portfolio-section portfolio-hero px-5 pb-10 pt-6 sm:pb-14">
        <HeroConstellation />
        <div className="container relative z-10 max-w-5xl mx-auto">
          <div className="grid items-center gap-8 sm:grid-cols-[minmax(0,1fr)_220px]">
            <div className="order-2 text-center sm:order-1 sm:text-left">
              <p className="mb-3 text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: 'var(--portfolio-accent)' }}>
                Product & Platform Engineering
              </p>
              <h1 className="text-5xl font-bold tracking-normal sm:text-6xl" style={{ color: 'var(--portfolio-text)' }}>
                Anshul Kapoor
              </h1>
              <p className="portfolio-muted mx-auto mt-4 max-w-3xl text-lg leading-8 sm:mx-0 sm:text-xl">
                Software Engineer building scalable fintech frontends, microfrontend systems,
                and GraphQL-driven product experiences.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="portfolio-chip px-3 py-2 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex justify-center sm:justify-start">
                <ResumeDrawer />
              </div>

              <div className="mt-6 flex justify-center gap-4 sm:justify-start">
                <Link legacyBehavior href="mailto:anshulkapoor018@gmail.com" passHref>
                  <a className="portfolio-icon-link" aria-label="Email Anshul Kapoor">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  </a>
                </Link>
                <Link legacyBehavior href="https://github.com/anshulkapoor018" passHref>
                  <a className="portfolio-icon-link" aria-label="GitHub profile">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </Link>
                <Link legacyBehavior href="https://linkedin.com/in/anshulkapoor018" passHref>
                  <a className="portfolio-icon-link" aria-label="LinkedIn profile">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </Link>
                <Link legacyBehavior href="tel:2018397699" passHref>
                  <a className="portfolio-icon-link" aria-label="Call Anshul Kapoor">
                    <FontAwesomeIcon icon={faSquarePhoneFlip} size="2x" />
                  </a>
                </Link>
              </div>
            </div>

            <div className="order-1 flex flex-col items-center gap-5 sm:order-2">
              <div className="rounded-full shadow-2xl shadow-black/30 dark:shadow-white/10">
                <Image
                  src="/profilepic.jpeg"
                  alt="Anshul Kapoor"
                  width={220}
                  height={220}
                  priority
                  className="rounded-full"
                />
              </div>
              <div
                className="portfolio-card hidden w-full p-4 sm:block"
              >
                <p className="portfolio-subtle text-xs font-semibold uppercase tracking-wide">Current focus</p>
                <p className="mt-1 text-base font-semibold" style={{ color: 'var(--portfolio-text)' }}>
                  Modernizing AR workflows at BILL
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };
  


export default Header;
