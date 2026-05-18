import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

import { languages } from '../constants/languages';
import { useAppLanguageContext } from '../contexts';

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
      contentStyle={{ background: 'rgba(10,15,28,0.6)', color: '#fff', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}
      contentArrowStyle={{ borderRight: '7px solid rgba(255,255,255,0.1)' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="object-cover"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-text-primary text-[1.5rem] font-bold">{experience.title}</h3>
        <p
          className="text-text-secondary text-[1rem] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-text-secondary text-[0.875rem] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );

const Experience = () => {
  const { languageOption } = useAppLanguageContext();
  const language = languages[languageOption];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{language.experienceText.title}</p>
        <h2 className={styles.sectionHeadText}>
          {language.experienceText.subtitle}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {language.experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');
