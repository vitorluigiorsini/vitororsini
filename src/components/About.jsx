import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { translations } from '../constants/translations';
import { useAppLanguageContext } from '../contexts/LanguageContext';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="w-full xs:w-[250px]"
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-gray-900/60 backdrop-blur rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border border-white/5">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-text-primary text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { t, tv } = useAppLanguageContext();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('aboutText.title')}</p>
        <h2 className={styles.sectionHeadText}>
          {t('aboutText.subtitle')}
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-text-secondary max-w-3xl"
      >
        {t('aboutText.about')}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {translations.services.map((service, index) => (
          <ServiceCard
            key={`service-${index}`}
            index={index}
            title={tv(service.title)}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
