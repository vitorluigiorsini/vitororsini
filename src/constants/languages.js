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
  vuejs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ctrls,
  methaenergia,
  supra,
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
        'https://drive.google.com/file/d/1O9L4upOMLzdAm3qEHuFTYRNCSBEOg8_1/view?usp=drive_link'
    },

    aboutText: {
      title: 'Introdução',
      subtitle: 'Sobre',
      about:
        'Engenheiro de software com foco em TypeScript, React e Node.js. Desenvolvi diversos projetos pessoais abrangendo Front-End, Back-End e integração entre sistemas, buscando sempre utilizar as boas práticas de desenvolvimento de software. Atuei em uma Startup onde liderei o desenvolvimento de um MVP desde a sua fase inicial até a sua liberação. Aprofundei conhecimentos em arquitetura serverless e ferramentas de nuvem da AWS, integrações com APIs externas e versionamento e automatização de deploy do sistema.Atualmente tenho estudo sobre diferentes tipos de arquitetura e patterns como DDD e Microsserviços, aplicação dos princípios do Clean Code, comunicação entre sistemas, modularização de sistemas monolíticos, containers, e ferramentas de cloud. Estou sempre em busca de novos desafios para expandir ainda mais minha expertise na área da tecnologia.'
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
        company_name: 'Metha Energia',
        icon: methaenergia,
        iconBg: '#E6DEDD',
        date: 'Fevereiro 2024 - Atualmente',
        points: ['Desenvolvimento de software.', 'Metodologia ágil (Scrum).']
      },
      {
        title: 'Desenvolvedor Full Stack',
        company_name: 'Supra',
        icon: supra,
        iconBg: '#383E56',
        date: 'Novembro 2023 - Fevereiro 2024',
        points: [
          'Desenvolvimento de software.',
          'Metodologia ágil (Scrum).',
          'Desenvolvimento de sistema para processamento de pedidos e carrinho de compras.',
          'DDD e TDD.'
        ]
      },
      {
        title: 'Desenvolvedor Full Stack',
        company_name: 'Ctrl Saúde',
        icon: ctrls,
        iconBg: '#E6DEDD',
        date: 'Setembro 2022 - Novembro 2023',
        points: [
          'Desenvolvimento de sistema MVP para vendas utilizando arquitetura serverless com implantação na nuvem da AWS.',
          'Implementação de ChatBot com API oficial do WhatsApp Business, desenvolvimento do Back-End e Front-End, integração com APIs externas, versionamento do código, automatização do deploy, e documentação.',
          'Techs: TypeScript, React, Material UI, Node.js, AWS (DynamoDB, S3, API Gateway, CloudFront, OpenSearch, CodeBuild, Amplify), Git, BitBucket, MessageBird, ShortCut, Postman.'
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
        name: 'Vue JS',
        icon: vuejs
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
      copyToClipboardText:
        'Clique para copiar meu email para sua área de transferência',
      clipboardEmail: 'vitorluigiorsini@gmail.com',
      copiedToClipboardText: '✔️ Copiado!',
      name: 'Seu nome',
      namePlaceholder: 'Qual o seu nome?',
      email: 'Seu email',
      emailPlaceholder: 'Qual o seu email?',
      message: 'Sua menssagem',
      messagePlaceholder: 'O que você gostaria de falar?',
      send: 'Enviar',
      sending: 'Enviando...',
      sentOk: '✔️ Obrigado. Entrarei em contato o mais breve possível.',
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
        'https://drive.google.com/file/d/1fFUQ6YtMqE0ZLKJXffJK4cCnVrUresAO/view?usp=drive_link'
    },

    aboutText: {
      title: 'Introduction',
      subtitle: 'Overview',
      about:
        'Software engineer with a focus on TypeScript, React, and Node.js. I have developed several personal projects spanning Front-End, Back-End, and system integration, always striving to adhere to best software development practices. I worked at a startup where I led the development of an MVP from its initial phase to release. I deepened my knowledge in serverless architecture and AWS cloud tools, external API integrations, and system versioning and deployment automation. Currently, I am studying different architecture types and patterns such as DDD and Microservices, applying Clean Code principles, system communication, modularization of monolithic systems, containers, and cloud tools. I am always seeking new challenges to further expand my expertise in the technology field.'
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
        company_name: 'Metha Energia',
        icon: methaenergia,
        iconBg: '#E6DEDD',
        date: 'February 2024 - Current',
        points: ['Software development.', 'Agile methodology (Scrum).']
      },
      {
        title: 'Full Stack Developer',
        company_name: 'Supra',
        icon: supra,
        iconBg: '#383E56',
        date: 'November 2023 - February 2024',
        points: [
          'Software development.',
          'Agile methodology (Scrum).',
          'System development for order processing and shopping cart.',
          'DDD and TDD.'
        ]
      },
      {
        title: 'Full Stack Developer',
        company_name: 'Ctrl Saúde',
        icon: ctrls,
        iconBg: '#E6DEDD',
        date: 'September 2022 - November 2023',
        points: [
          'MVP system development for sales using a serverless architecture with deployment on AWS cloud.',
          'Implementation of a ChatBot with the official WhatsApp Business API, development of Back-End and Front-End, integration with external APIs, code versioning, automated deployment, and documentation.',
          'Techs: TypeScript, React, Material UI, Node.js, AWS (DynamoDB, S3, API Gateway, CloudFront, OpenSearch, CodeBuild, Amplify), Git, BitBucket, MessageBird, ShortCut, Postman.'
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
        name: 'Vue JS',
        icon: vuejs
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
      copyToClipboardText: 'Click to copy my email address to you clipboard',
      clipboardEmail: 'vitorluigiorsini@gmail.com',
      copiedToClipboardText: '✔️ Copied!',
      name: 'Your name',
      namePlaceholder: "What's your name name?",
      email: 'Your email',
      emailPlaceholder: "What's your email?",
      message: 'Your message',
      messagePlaceholder: 'What do you want to say?',
      send: 'Send',
      sending: 'Sending...',
      sentOk: '✔️ Thank you. I will get back to you as soon as possible.',
      sentError: '❌ Something went wrong. Try again later.'
    }
  }
};
