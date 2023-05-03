import React from 'react'
import CV from '../assets/VitorOrsiniDev-CV-Dark-En.pdf'

const CTA = () => {
  return (
    <div className="absolute top-[30%] left-1/2 -translate-x-1/2 flex justify-center gap-4 mt-10 w-full">
      <a
        href={CV}
        rel="noopener noreferrer"
        target="_blank"
        className="bg-tertiary animate-lighten hover:bg-opacity-60 py-3 px-3 xs:px-8 outline-none w-fit text-white font-bold xs:text-base text-xs shadow-md shadow-primary rounded-xl"
      >
        Download CV
      </a>
      <a
        href="#contact"
        className="bg-tertiary hover:bg-opacity-60 py-3 px-3 xs:px-8 outline-none w-fit text-white font-bold xs:text-base text-xs shadow-md shadow-primary rounded-xl"
      >
        Let's Talk
      </a>
    </div>
  )
}

export default CTA
