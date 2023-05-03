import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import {
  logo,
  menu,
  close,
  iconGithub,
  iconLinkedin,
  iconWhatsapp
} from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
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
    <nav
      className={`${styles.paddingX} w-full flex h-20 items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex sm:justify-between justify-center items-center max-w-7xl mx-auto">
        <div className="xs:w-auto w-full flex justify-between xs:justify-start items-center">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('')
              window.scrollTo(0, 0)
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Vitor Orsini
            </p>
          </Link>
          <div className="flex items-center xs:gap-3 gap-2 p-4">
            <div
              onClick={() =>
                window.open('https://github.com/vitorluigiorsini/', '_blank')
              }
              className="hover:opacity-60 xs:h-7 xs:w-7 h-6 w-6 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={iconGithub} alt="github" />
            </div>
            <div
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/vitorluigiorsini/',
                  '_blank'
                )
              }
              className="hover:opacity-60 xs:h-7 xs:w-7 h-6 w-6 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={iconLinkedin} alt="linkedin" />
            </div>
            <div
              onClick={() =>
                window.open('https://wa.me/5531993474431', '_blank')
              }
              className="hover:opacity-60 xs:h-7 xs:w-7 h-6 w-6 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={iconWhatsapp} alt="whatsapp" />
            </div>
          </div>
        </div>
        {isMobile ? null : (
          <ul className="list-none flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar
