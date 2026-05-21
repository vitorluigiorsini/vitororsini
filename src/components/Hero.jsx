import CTA from './CTA';

import { useAppLanguageContext } from '../contexts';

const Hero = () => {
  const { t } = useAppLanguageContext();

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className="absolute inset-0 xs:top-[120px] top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-8 sm:px-8 px-4"
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-r from-secondary/20 to-transparent" />
        </div>

        <div>
          <h1 className="text-text-primary font-bold text-5xl sm:text-4xl xl:text-5xl">
            {t('heroText.greeting')}{' '}
            <span className="text-secondary">Vitor</span>
          </h1>
          <p className="text-text-secondary mt-2 text-lg">
            {t('heroText.role')}
          </p>
        </div>
      </div>

      <CTA />

      <div className="w-full">
        <div className="bg-profile bg-cover bg-no-repeat bg-center ring-2 ring-white/20 absolute xs:h-80 xs:w-80 h-44 w-44 top-[48%] left-1/2 -translate-x-1/2 flex justify-center items-center rounded-full overflow-hidden"></div>
      </div>
    </section>
  );
};

export default Hero;
