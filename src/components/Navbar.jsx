import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Using Tailwind classes directly instead of external styles
import { logo, iconGithub, iconLinkedin, iconWhatsapp } from '../assets';
import { translations } from '../constants/translations';
import { useAppLanguageContext } from '../contexts';
import { useScrollSpy } from '../hooks/useScrollSpy';

const Navbar = () => {
  const { toggleLanguage, languageOption, t } = useAppLanguageContext();

  const [isMobile, setIsMobile] = useState(false);
  const activeSection = useScrollSpy(['about', 'experience', 'projects', 'contact']);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <nav
      className="w-full flex h-[3.5rem] items-center px-4 sm:px-6 fixed top-0 z-20 bg-primary/90 backdrop-blur"
    >
      <div className="w-full flex sm:justify-between justify-center items-center max-w-7xl mx-auto">
        <div className="w-full flex items-center justify-between sm:justify-start sm:gap-8">
          <div className="xs:w-auto w-full flex justify-start items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            </Link>
            <div className="flex items-center xs:gap-3 gap-2">
              <div
                onClick={() =>
                  window.open('https://github.com/vitorluigiorsini/', '_blank')
                }
                className="opacity-60 hover:opacity-100 xs:h-7 xs:w-7 h-6 w-6 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={iconGithub} alt="github" />
              </div>
              <div
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/vitorluigiorsini/',
                    '_blank'
                  )
                }
                className="opacity-60 hover:opacity-100 xs:h-7 xs:w-7 h-6 w-6 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={iconLinkedin} alt="linkedin" />
              </div>
              <div
                onClick={() =>
                  window.open('https://wa.me/5531993474431', '_blank')
                }
                className="opacity-60 hover:opacity-100 xs:h-7 xs:w-7 h-6 w-6 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={iconWhatsapp} alt="whatsapp" />
              </div>
            </div>
          </div>
          <div className="flex gap-3 text-2xl sm:text-xl">
            <div
              onClick={languageOption === 'en' ? toggleLanguage : null}
              className={`${
                languageOption === 'pt-br'
                  ? 'border-b-2 cursor-default'
                  : 'cursor-pointer opacity-60 hover:opacity-100'
              }`}
            >
              🇧🇷
            </div>
            <div
              onClick={languageOption === 'pt-br' ? toggleLanguage : null}
              className={`${
                languageOption === 'en'
                  ? 'border-b-2 cursor-default'
                  : 'cursor-pointer opacity-60 hover:opacity-100'
              }`}
            >
              🇺🇸
            </div>
          </div>
        </div>
        {isMobile ? null : (
          <ul className="list-none flex flex-row gap-10">
            {translations.navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`${
                  activeSection === link.id ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200`}
              >
                <a href={`#${link.id}`}>{t(`navLinks.${index}.title`)}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
