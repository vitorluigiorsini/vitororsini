import { BrowserRouter } from 'react-router-dom'

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Nav,
  Tech,
  Projects,
  StarsCanvas
} from './components'
import { useEffect, useState } from 'react'
import { logo } from './assets'

const App = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)')

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="relative bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {isMobile ? (
            <>
              <div className="flex justify-center items-center absolute top-10 w-full gap-2">
                <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                <p className="text-white text-[18px] font-bold cursor-pointer flex">
                  Vitor Orsini &nbsp;
                  <span className="sm:block hidden">| Dev</span>
                </p>
              </div>
              <Nav />
            </>
          ) : (
            <Navbar />
          )}
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
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
