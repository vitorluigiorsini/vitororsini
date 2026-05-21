import { useEffect, useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { SiKnowledgebase, SiLitiengine } from 'react-icons/si'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useScrollSpy } from '../hooks/useScrollSpy'

const MobileNavbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const activeSection = useScrollSpy(['about', 'experience', 'projects', 'contact'])

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

  if (!isMobile) {
    return null
  }

  return (
    <nav id="mobileNav">
      <Link
        to="/"
        className={activeSection === '' ? 'active' : ''}
        onClick={() => window.scrollTo(0, 0)}
      >
        <AiOutlineHome />
      </Link>
      <a
        href="#about"
        className={activeSection === 'about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeSection === 'experience' ? 'active' : ''}
      >
        <SiKnowledgebase />
      </a>
      <a
        href="#projects"
        className={activeSection === 'projects' ? 'active' : ''}
      >
        <SiLitiengine />
      </a>
      <a
        href="#contact"
        className={activeSection === 'contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default MobileNavbar
