import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { logo, iconGithub, iconLinkedin, iconWhatsapp } from '../assets';
import { languages } from '../constants/languages';
import { useAppLanguageContext } from '../contexts';

const Navbar = () => {
  const { toggleLanguage, languageOption } = useAppLanguageContext();
  const language = languages[languageOption];

  const [active, setActive] = useState('');
  const [isMobile, setIsMobile] = useState(false);

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
      className={`${styles.paddingX} w-full flex h-20 items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex sm:justify-between justify-center items-center max-w-7xl mx-auto">
        <div className="w-full flex items-center justify-between sm:justify-start sm:gap-8">
          <div className="xs:w-auto w-full flex justify-start items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive('');
                window.scrollTo(0, 0);
              }}
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
            {language.navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
