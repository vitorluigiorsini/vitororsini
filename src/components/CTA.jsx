import React from 'react';
import { languages } from '../constants/languages';
import { useAppLanguageContext } from '../contexts';

const CTA = () => {
  const { languageOption } = useAppLanguageContext();
  const language = languages[languageOption];

  return (
    <div className="absolute top-[30%] left-1/2 -translate-x-1/2 flex justify-center gap-4 mt-16 w-full">
      <a
        href={language.CTAText.cvURL}
        rel="noopener noreferrer"
        target="_blank"
        className="bg-tertiary animate-lighten hover:bg-opacity-60 py-3 px-3 xs:px-8 outline-none w-fit text-white font-bold xs:text-base text-xs shadow-md shadow-primary rounded-xl"
      >
        {language.CTAText.download}
      </a>
      <a
        href="#contact"
        className="bg-tertiary hover:bg-opacity-60 py-3 px-3 xs:px-8 outline-none w-fit text-white font-bold xs:text-base text-xs shadow-md shadow-primary rounded-xl"
      >
        {language.CTAText.contact}
      </a>
    </div>
  );
};

export default CTA;
