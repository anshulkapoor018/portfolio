'use client'
import Image from 'next/image';
import Link from 'next/link';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSquarePhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'next-themes';
config.autoAddCss = false;

const Header = () => {
    const { theme } = useTheme(); // Get the current theme

    // Define icon colors for light and dark themes
    const iconColor = theme === 'dark' ? 'white' : 'black';

    return (
      <header className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-400 p-4">
        <div className="container flex flex-col sm:flex-row justify-center items-center mx-auto">
        <div className="flex justify-center mb-4 sm:mb-0">
          <div className="rounded-full shadow-2xl shadow-black dark:shadow-2xl dark:shadow-white/10">
            <Image
              src="/profilepic.jpeg" 
              alt="Anshul Kapoor"
              width={240} 
              height={240}
              className="rounded-full"
            />
          </div>
        </div>
          <div className="text-center sm:text-left sm:pl-6">
            <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-400">Anshul Kapoor</h1>
            <p className="text-gray-600">Spinning up pixel-perfect layouts and breathing life into UI designs</p>
            <div className="flex justify-center sm:justify-start space-x-4 mt-2">
              {/* Icons */}
              {/* <Link legacyBehavior href="mailto:anshulkapoor018@gmail.com" passHref>
                <a className="text-gray-900 hover:text-black">
                  <FontAwesomeIcon color={iconColor} icon={faEnvelope} size="2x" />
                </a>
              </Link> */}
              <Link legacyBehavior href="https://twitter.com/anshulkapoor018" passHref>
                <a className="text-blue-500 hover:text-blue-600">
                  <FontAwesomeIcon color={iconColor} icon={faTwitter} size="2x" />
                </a>
              </Link>
              <Link legacyBehavior href="https://github.com/anshulkapoor018" passHref>
                <a className="text-gray-900 hover:text-black">
                  <FontAwesomeIcon color={iconColor} icon={faGithub} size="2x" />
                </a>
              </Link>
              <Link legacyBehavior href="https://linkedin.com/in/anshulkapoor018" passHref>
                <a className="text-gray-900 hover:text-black">
                  <FontAwesomeIcon color={iconColor} icon={faLinkedin} size="2x" />
                </a>
              </Link>
              <Link legacyBehavior href="tel:2018397699" passHref>
                <a className="text-gray-900 hover:text-black">
                  <FontAwesomeIcon color={iconColor} icon={faSquarePhoneFlip} size="2x" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  };
  


export default Header;
