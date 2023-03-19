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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ctrls,
  vitororsini,
  carrent,
  jobit,
  tripguide,
  onebitsports,
  doctorcare,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web',
    icon: web,
  },
  {
    title: 'Mobile',
    icon: mobile,
  },
  {
    title: 'Backend',
    icon: backend,
  },
  {
    title: 'Frontend',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Frontend Developer',
    company_name: 'Freelance',
    icon: vitororsini,
    iconBg: '#383E56',
    date: 'March 2021 - September 2022',
    points: [
      'Developing and maintaining web applications using React.js, Node.js and other related technologies.',
      "Implementing REST API's using the best practices and clean code.",
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in bootcamps and continually learning new skills.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Ctrl Saúde',
    icon: ctrls,
    iconBg: '#E6DEDD',
    date: 'September 2022 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nulla iste quaerat!',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores qui reiciendis, laboriosam libero voluptas voluptatem?',
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quibusdam?',
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'OneBitSports',
    description:
      'Landing page to provide information and news about sports with a beaultiful and responsive design.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
    ],
    image: onebitsports,
    source_code_link: 'https://github.com/vitorluigiorsini/onebitsports',
  },
  {
    name: 'Doctorcare',
    description:
      'High-converting landing page built with responsive and modern design to target your audience, and offer them something of value.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: doctorcare,
    source_code_link: 'https://vitorluigiorsini.github.io/nlw-return/',
  },
];

export { services, technologies, experiences, testimonials, projects };
