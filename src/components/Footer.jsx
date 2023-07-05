import { SectionWrapper } from '../hoc';

const Footer = () => {
  return (
    <p className="flex justify-center -mt-28 sm:mt-0 mb-20 sm:mb-0">
      © Vitor Orsini
    </p>
  );
};

export default SectionWrapper(Footer, '');
