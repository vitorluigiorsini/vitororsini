import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ctrls,
  vitororsini,
  onebitsports,
  doctorcare,
  aws,
  postgresql,
  findDuo,
  portfolio,
  ecommerce
} from '../assets';

export const languages = {
  'pt-br': {
    navLinks: [
      {
        id: 'about',
        title: 'Sobre'
      },
      {
        id: 'experience',
        title: 'Experiência'
      },
      {
        id: 'projects',
        title: 'Projetos'
      },
      {
        id: 'contact',
        title: 'Contato'
      }
    ],

    heroText: {
      greeting: 'Oi, sou o',
      role: 'Sou Engenheiro de Software'
    },

    CTAText: {
      download: 'Download CV',
      contact: 'Vamos conversar',
      cvURL:
        'https://drive.google.com/file/d/10lL3f68RNuKoNazB1PEgD-K_rHrSnfM7/view?usp=drive_link'
    },

    aboutText: {
      title: 'Introdução',
      subtitle: 'Sobre',
      about:
        'Superior em Engenharia Civil. Desenvolvedor e Técnico em Informática com mais de 5 anos de experiência em TI. Atuou como professor de hardware e software, gerente de manutenção de computadores e auxiliar técnico de TI. Morou 18 meses nos Estados Unidos, onde alcançou a fluência avançada em Inglês. Atuando desde setembro de 2021 na área da tecnologia. Atualmente trabalhando como Engenheiro de Software em uma startup.'
    },

    services: [
      {
        title: 'Desenvolvimento Web',
        icon: web
      },
      {
        title: 'Computação em Nuvem',
        icon: mobile
      },
      {
        title: 'Backend',
        icon: backend
      },
      {
        title: 'Frontend',
        icon: creator
      }
    ],

    experienceText: {
      title: 'O que já fiz',
      subtitle: 'Experiência'
    },

    experiences: [
      {
        title: 'Desenvolvedor Full Stack',
        company_name: 'Ctrl Saúde',
        icon: ctrls,
        iconBg: '#E6DEDD',
        date: 'Setembro 2022 - Atual',
        points: [
          'Gerenciamento de projeto utilizando metodologia ágil (Kanban).',
          'Implementação de sistema com as principais tecnologias: AWS, NodeJs, TypeScript e React.',
          'Backend: implementação de Rest API, integrações com APIs externas, serverless framework.',
          'Frontend: implementação de interfaces de usuário com React e Material UI.'
        ]
      },
      {
        title: 'Desenvolvedor Full Stack',
        company_name: 'Freelancer',
        icon: vitororsini,
        iconBg: '#383E56',
        date: 'Março 2021 - Setembro 2022',
        points: [
          'Desenvolvimento e manutenção de aplicações web usando React.js, Node.js e outras tecnologias relacionadas.',
          "Implementação de REST API's usando boas práticas e clean code.",
          'Implementação de design resposivo e garantindo compatibilidade.',
          'Participação de bootcamps e aprendizado contínuo de novas tecnologias.'
        ]
      }
    ],

    skillsText: {
      title: 'Minhas Stacks',
      subtitle: 'Habilidades'
    },

    technologies: [
      {
        name: 'HTML 5',
        icon: html
      },
      {
        name: 'CSS 3',
        icon: css
      },
      {
        name: 'JavaScript',
        icon: javascript
      },
      {
        name: 'TypeScript',
        icon: typescript
      },
      {
        name: 'React JS',
        icon: reactjs
      },
      {
        name: 'Tailwind CSS',
        icon: tailwind
      },
      {
        name: 'Node JS',
        icon: nodejs
      },
      {
        name: 'MongoDB',
        icon: mongodb
      },
      {
        name: 'PostgreSQL',
        icon: postgresql
      },
      {
        name: 'AWS',
        icon: aws
      },
      {
        name: 'git',
        icon: git
      },
      {
        name: 'figma',
        icon: figma
      },
      {
        name: 'docker',
        icon: docker
      }
    ],

    testimonialsText: {
      title: 'O que os outros falam',
      subtitle: 'Recomendações'
    },

    testimonials: [
      {
        testimonial:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nulla iste quaerat!',
        name: 'Sara Lee',
        designation: 'CFO',
        company: 'Acme Co',
        image: 'https://randomuser.me/api/portraits/women/4.jpg'
      },
      {
        testimonial:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores qui reiciendis, laboriosam libero voluptas voluptatem?',
        name: 'Chris Brown',
        designation: 'COO',
        company: 'DEF Corp',
        image: 'https://randomuser.me/api/portraits/men/5.jpg'
      },
      {
        testimonial:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quibusdam?',
        name: 'Lisa Wang',
        designation: 'CTO',
        company: '456 Enterprises',
        image: 'https://randomuser.me/api/portraits/women/6.jpg'
      }
    ],

    projectsText: {
      title: 'Meus Trabalhos',
      subtitle: 'Projetos',
      projectsIntro:
        'Os projetos a seguir mostram as minhas habilidades e experiência em projetos de exemplo do mundo real. Cada projeto é brevemente descrito com links para os respectivos repositórios e demos. Eles refletem as minhas habilidades em resolver problemas complexos, trabalhar com diferentes tecnologias, e gerenciar projetos efetivamente.'
    },

    projects: [
      {
        name: 'OneBitSports',
        description:
          'Landing page para fornecer informações e notícias sobre esportes com um design bonito e responsivo.',
        tags: [
          {
            name: 'HTML',
            color: 'blue-text-gradient'
          },
          {
            name: 'CSS',
            color: 'green-text-gradient'
          }
        ],
        image: onebitsports,
        source_code_link: 'https://github.com/vitorluigiorsini/onebitsports'
      },
      {
        name: 'Doctorcare',
        description:
          'Landing page de alta conversão, construída com design moderno e responsivo para atingir seu público e oferecer algo de valor.',
        tags: [
          {
            name: 'HTML',
            color: 'blue-text-gradient'
          },
          {
            name: 'CSS',
            color: 'green-text-gradient'
          },
          {
            name: 'JavaScript',
            color: 'pink-text-gradient'
          }
        ],
        image: doctorcare,
        source_code_link: 'https://github.com/vitorluigiorsini/nlw-return/'
        // source_code_link: 'https://vitorluigiorsini.github.io/nlw-return/'
      },
      {
        name: 'Find Your Duo',
        description:
          'Aplicação web full stack e mobile para encontrar colegas e agendar partidas de jogos.',
        tags: [
          {
            name: 'React',
            color: 'blue-text-gradient'
          },
          {
            name: 'NodeJs',
            color: 'green-text-gradient'
          },
          {
            name: 'TypeScript',
            color: 'pink-text-gradient'
          },
          {
            name: 'React Native',
            color: 'orange-text-gradient'
          }
        ],
        image: findDuo,
        source_code_link: 'https://github.com/vitorluigiorsini/nlw-eSports/'
        // source_code_link: 'https://vitorluigiorsini.github.io/nlw-eSports/'
      },
      {
        name: 'Portfolio',
        description: 'Um site de portfólio moderno criado com React e ThreeJs.',
        tags: [
          {
            name: 'React',
            color: 'blue-text-gradient'
          },
          {
            name: 'Javascript',
            color: 'green-text-gradient'
          },
          {
            name: 'ThreeJs',
            color: 'orange-text-gradient'
          }
        ],
        image: portfolio,
        source_code_link: 'https://github.com/vitorluigiorsini/vitororsini/'
      },
      {
        name: 'ECommerce API',
        description: 'E-Commerce serverless API usando AWS-CDK + TypeScript.',
        tags: [
          {
            name: 'NodeJS',
            color: 'blue-text-gradient'
          },
          {
            name: 'TypeScript',
            color: 'green-text-gradient'
          },
          {
            name: 'AWS-CDK',
            color: 'orange-text-gradient'
          }
        ],
        image: ecommerce,
        source_code_link:
          'https://github.com/vitorluigiorsini/ecommerce-aws-api/'
      }
    ],

    contactText: {
      title: 'Entre em contato',
      subtitle: 'Contato',
      name: 'Seu nome',
      namePlaceholder: 'Qual o seu nome?',
      email: 'Seu email',
      emailPlaceholder: 'Qual o seu email?',
      message: 'Sua menssagem',
      messagePlaceholder: 'O que você gostaria de falar?',
      send: 'Enviar',
      sending: 'Enviando...',
      sentOk: '✅ Obrigado. Entrarei em contato o mais breve possível.',
      sentError: '❌ Algo deu errado. Tente novamente mais tarde.'
    }
  },

  en: {
    navLinks: [
      {
        id: 'about',
        title: 'About'
      },
      {
        id: 'experience',
        title: 'Experience'
      },
      {
        id: 'projects',
        title: 'Projects'
      },
      {
        id: 'contact',
        title: 'Contact'
      }
    ],

    heroText: {
      greeting: "Hi, I'm",
      role: "I'm a Software Engineer"
    },

    CTAText: {
      download: 'Download CV',
      contact: "Let's talk",
      cvURL:
        'https://drive.google.com/file/d/1jbx5t8MR0z3R4a00NkltDaazkXINgJ7w/view?usp=drive_link'
    },

    aboutText: {
      title: 'Introduction',
      subtitle: 'Overview',
      about:
        'Major in Civil Engineering. Developer and Computer Technician with more than 5 years of experience in IT. Experience as a professor of hardware  and software, computer maintenance manager and IT technical assistant. Lived in the United States for 18 months. Have advanced fluency in English. Acting since September 2021 in the technology area. Currently working as a Software Engineer in a startup.'
    },

    services: [
      {
        title: 'Web Development',
        icon: web
      },
      {
        title: 'Cloud Computing',
        icon: mobile
      },
      {
        title: 'Backend',
        icon: backend
      },
      {
        title: 'Frontend',
        icon: creator
      }
    ],

    experienceText: {
      title: 'What I have done so far',
      subtitle: 'Work Experience'
    },

    experiences: [
      {
        title: 'Full Stack Developer',
        company_name: 'Ctrl Saúde',
        icon: ctrls,
        iconBg: '#E6DEDD',
        date: 'September 2022 - Current',
        points: [
          'Project management with agile methodology (Kanban).',
          'Implementation of systems with the main technologies: AWS, NodeJs, TypeScript and React.',
          'Backend: implementation of Rest API, integration with external APIs, serverless framework.',
          'Frontend: implementation of user interfaces with React and Material UI.'
        ]
      },
      {
        title: 'Full Stack Developer',
        company_name: 'Freelancer',
        icon: vitororsini,
        iconBg: '#383E56',
        date: 'March 2021 - September 2022',
        points: [
          'Developing and maintaining web applications using React.js, Node.js and other related technologies.',
          "Implementing REST API's using the best practices and clean code.",
          'Implementing responsive design and ensuring cross-browser compatibility.',
          'Participating in bootcamps and continually learning new skills.'
        ]
      }
    ],

    skillsText: {
      title: 'My Stacks',
      subtitle: 'Skills'
    },

    technologies: [
      {
        name: 'HTML 5',
        icon: html
      },
      {
        name: 'CSS 3',
        icon: css
      },
      {
        name: 'JavaScript',
        icon: javascript
      },
      {
        name: 'TypeScript',
        icon: typescript
      },
      {
        name: 'React JS',
        icon: reactjs
      },
      {
        name: 'Tailwind CSS',
        icon: tailwind
      },
      {
        name: 'Node JS',
        icon: nodejs
      },
      {
        name: 'MongoDB',
        icon: mongodb
      },
      {
        name: 'PostgreSQL',
        icon: postgresql
      },
      {
        name: 'AWS',
        icon: aws
      },
      {
        name: 'git',
        icon: git
      },
      {
        name: 'figma',
        icon: figma
      },
      {
        name: 'docker',
        icon: docker
      }
    ],

    testimonialsText: {
      title: 'What others say',
      subtitle: 'Testimonials'
    },

    testimonials: [
      {
        testimonial:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nulla iste quaerat!',
        name: 'Sara Lee',
        designation: 'CFO',
        company: 'Acme Co',
        image: 'https://randomuser.me/api/portraits/women/4.jpg'
      },
      {
        testimonial:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores qui reiciendis, laboriosam libero voluptas voluptatem?',
        name: 'Chris Brown',
        designation: 'COO',
        company: 'DEF Corp',
        image: 'https://randomuser.me/api/portraits/men/5.jpg'
      },
      {
        testimonial:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quibusdam?',
        name: 'Lisa Wang',
        designation: 'CTO',
        company: '456 Enterprises',
        image: 'https://randomuser.me/api/portraits/women/6.jpg'
      }
    ],

    projectsText: {
      title: 'My Work',
      subtitle: 'Projects',
      projectsIntro:
        'Following projects showcases my skills and experience through real-world exemples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.'
    },

    projects: [
      {
        name: 'OneBitSports',
        description:
          'Landing page to provide information and news about sports with a beaultiful and responsive design.',
        tags: [
          {
            name: 'HTML',
            color: 'blue-text-gradient'
          },
          {
            name: 'CSS',
            color: 'green-text-gradient'
          }
        ],
        image: onebitsports,
        source_code_link: 'https://github.com/vitorluigiorsini/onebitsports'
      },
      {
        name: 'Doctorcare',
        description:
          'High-converting landing page built with responsive and modern design to target your audience, and offer them something of value.',
        tags: [
          {
            name: 'HTML',
            color: 'blue-text-gradient'
          },
          {
            name: 'CSS',
            color: 'green-text-gradient'
          },
          {
            name: 'JavaScript',
            color: 'pink-text-gradient'
          }
        ],
        image: doctorcare,
        source_code_link: 'https://github.com/vitorluigiorsini/nlw-return/'
        // source_code_link: 'https://vitorluigiorsini.github.io/nlw-return/'
      },
      {
        name: 'Find Your Duo',
        description:
          'API, Web, and Mobile application to find peers and schedule matches.',
        tags: [
          {
            name: 'React',
            color: 'blue-text-gradient'
          },
          {
            name: 'NodeJs',
            color: 'green-text-gradient'
          },
          {
            name: 'TypeScript',
            color: 'pink-text-gradient'
          },
          {
            name: 'React Native',
            color: 'orange-text-gradient'
          }
        ],
        image: findDuo,
        source_code_link: 'https://github.com/vitorluigiorsini/nlw-eSports/'
        // source_code_link: 'https://vitorluigiorsini.github.io/nlw-eSports/'
      },
      {
        name: 'Portfolio',
        description:
          'A modern portfolio website created with React and ThreeJs.',
        tags: [
          {
            name: 'React',
            color: 'blue-text-gradient'
          },
          {
            name: 'Javascript',
            color: 'green-text-gradient'
          },
          {
            name: 'ThreeJs',
            color: 'orange-text-gradient'
          }
        ],
        image: portfolio,
        source_code_link: 'https://github.com/vitorluigiorsini/vitororsini/'
      },
      {
        name: 'ECommerce API',
        description: 'E-Commerce serverless API with AWS-CDK + TypeScript.',
        tags: [
          {
            name: 'NodeJS',
            color: 'blue-text-gradient'
          },
          {
            name: 'TypeScript',
            color: 'green-text-gradient'
          },
          {
            name: 'AWS-CDK',
            color: 'orange-text-gradient'
          }
        ],
        image: ecommerce,
        source_code_link:
          'https://github.com/vitorluigiorsini/ecommerce-aws-api/'
      }
    ],

    contactText: {
      title: 'Get in Touch',
      subtitle: 'Contact',
      name: 'Your name',
      namePlaceholder: "What's your name name?",
      email: 'Your email',
      emailPlaceholder: "What's your email?",
      message: 'Your message',
      messagePlaceholder: 'What do you want to say?',
      send: 'Send',
      sending: 'Sending...',
      sentOk: '✅ Thank you. I will get back to you as soon as possible.',
      sentError: '❌ Something went wrong. Try again later.'
    }
  }
};
