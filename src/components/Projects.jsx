import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

import { languages } from '../constants/languages';
import { useAppLanguageContext } from '../contexts';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover " />
        </div>

        <div className="mt-5">
          <div className="flex justify-between items-center">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <div className="flex justify-end m-3">
              <div
                onClick={() => window.open(source_code_link, '_blank')}
                className="bg-black hover:brightness-50 p-1 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={github} alt="github" />
              </div>
            </div>
          </div>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { languageOption } = useAppLanguageContext();
  const language = languages[languageOption];
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{language.projectsText.title}</p>
        <h2 className={styles.sectionHeadText}>
          {language.projectsText.subtitle}
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {language.projectsText.projectsIntro}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {language.projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
