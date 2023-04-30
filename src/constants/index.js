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
  findDuo,
  portfolio,
  ecommerce
} from '../assets'

export const navLinks = [
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
]

const services = [
  {
    title: 'Web Development',
    icon: web
  },
  {
    title: 'Mobile Apps',
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
]

const technologies = [
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
]

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'Ctrl Saúde',
    icon: ctrls,
    iconBg: '#E6DEDD',
    date: 'September 2022 - Current',
    points: [
      'Project management with agile methodology (Kanban)',
      'Implementation of sales system using AWS serverless and TypeScript',
      'Backend: development of API Rest and third-party APIs integration',
      "Frontend: development of user's interfaces and APIs integration"
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
]

const testimonials = [
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
]

const projects = [
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
    description: 'A modern portfolio website created with React and ThreeJs.',
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
    source_code_link: 'https://github.com/vitorluigiorsini/ecommerce-aws-api/'
  }
]

export { services, technologies, experiences, testimonials, projects }
