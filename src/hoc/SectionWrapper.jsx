import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';
import { useEffect, useState } from 'react';

const SectionWrapper = (Component, idName) =>
  function HOC() {
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
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span
          className={`block ${isMobile ? 'pt-16' : '-mt-[100px] pb-[100px]'}`}
          id={idName}
        >
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
