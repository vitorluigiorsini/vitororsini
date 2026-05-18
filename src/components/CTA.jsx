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
        className="bg-secondary text-text-primary hover:bg-secondary/90 px-4 py-2 xs:px-6 xs:py-3 rounded-md transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0"
      >
        {language.CTAText.download}
      </a>
      <a
        href="#contact"
        className="border border-secondary/20 hover:bg-secondary/10 hover:border-secondary text-text-primary px-4 py-2 xs:px-6 xs:py-3 rounded-md transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0"
      >
        {language.CTAText.contact}
      </a>
    </div>
  );
};

export default CTA;
