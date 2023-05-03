import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { SiKnowledgebase, SiLitiengine } from 'react-icons/si'
import { BiMessageSquareDetail } from 'react-icons/bi'

const MobileNavbar = () => {
  const [activeNav, setActiveNav] = useState('')

  return (
    <nav id="mobileNav">
      <a
        href="#"
        onClick={() => setActiveNav('')}
        className={activeNav === '' ? 'active' : ''}
        // title="Home"
      >
        <AiOutlineHome />
      </a>
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
