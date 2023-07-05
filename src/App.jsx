import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  MobileNavbar,
  Tech,
  Projects,
  StarsCanvas,
  Footer
} from './components';
import { AppLanguageProvider } from './contexts/LanguageContext';

const App = () => {
  return (
    <AppLanguageProvider>
      <BrowserRouter>
        <div className="relative bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <MobileNavbar />
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Projects />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </AppLanguageProvider>
  );
};

export default App;
