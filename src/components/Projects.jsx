import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

import { translations } from '../constants/translations';
import { useAppLanguageContext } from '../contexts';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link
}) => {
  const { tv } = useAppLanguageContext();

  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <div className="bg-gray-900/60 backdrop-blur p-4 rounded-xl sm:w-[360px] w-full border border-white/5">
        <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-text-primary font-bold text-xl">{name}</h3>
            <div className="flex justify-end m-2">
              <div
                onClick={() => window.open(source_code_link, '_blank')}
                className="bg-black/50 hover:bg-black/70 p-1 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer transition-all duration-150"
              >
                <img src={github} alt="github" className="w-5 h-5" />
              </div>
            </div>
          </div>
          <p className="mt-2 text-text-sm text-text-sm">{tv(description)}</p>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className="text-xs text-text-secondary bg-gray-800/50 px-2 py-0.5 rounded">
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useAppLanguageContext();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('projectsText.title')}</p>
        <h2 className={styles.sectionHeadText}>
          {t('projectsText.subtitle')}
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-text-secondary max-w-3xl"
        >
          {t('projectsText.projectsIntro')}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {translations.projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
