import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { translations } from '../constants/translations';
import { useAppLanguageContext } from '../contexts';

const Tech = () => {
  const { t } = useAppLanguageContext();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('skillsText.title')}</p>
        <h2 className={styles.sectionHeadText}>
          {t('skillsText.subtitle')}
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap mt-20 justify-center gap-20">
        {translations.technologies.map((technology) => (
          <div
            className="w-20 h-20 flex-col gap-2 justify-center items-center text-center"
            key={technology.name}
          >
            <img src={technology.icon} />
            <p className={styles.sectionSubText}>{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
