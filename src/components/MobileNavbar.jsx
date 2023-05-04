import { useEffect, useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { SiKnowledgebase, SiLitiengine } from 'react-icons/si'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
  const [activeNav, setActiveNav] = useState('')
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

  if (!isMobile) {
    return null
  }

  return (
    <nav id="mobileNav">
      <Link
        to="/"
        className={activeNav === '' ? 'active' : ''}
        onClick={() => {
          setActiveNav('')
          window.scrollTo(0, 0)
        }}
      >
        <AiOutlineHome />
      </Link>
      <a
        href="#about"
        onClick={() => setActiveNav('about')}
        className={activeNav === 'about' ? 'active' : ''}
        // title="About"
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('experience')}
        className={activeNav === 'experience' ? 'active' : ''}
        // title="Experience"
      >
        <SiKnowledgebase />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav('projects')}
        className={activeNav === 'projects' ? 'active' : ''}
        // title="Projects"
      >
        <SiLitiengine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('contact')}
        className={activeNav === 'contact' ? 'active' : ''}
        // title="Contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default MobileNavbar
