import { styles } from '../styles'

import CTA from './CTA'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 xs:top-[120px] top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Vitor</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Full Stack <br className="sm:block hidden" />
            Developer
          </p>
        </div>
      </div>

      <CTA />

      <div className="w-full">
        <div className="bg-profile bg-cover bg-no-repeat bg-center ring-2 ring-white-100 absolute xs:h-80 xs:w-80 h-44 w-44 top-[45%] left-1/2 -translate-x-1/2 flex justify-center items-center rounded-full overflow-hidden"></div>
      </div>
    </section>
  )
}

export default Hero
