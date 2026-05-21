# Vitor Orsini Portfolio

A modern, minimalist 3D portfolio website built with React, Three.js, and Framer Motion. Features a dark theme with sophisticated indigo accents, responsive design, and smooth animations.

## Features

- **3D Hero Section**: Interactive Three.js background with Earth and stars
- **Scroll Spy Navigation**: Automatic menu highlighting based on scroll position (desktop & mobile)
- **Responsive Design**: Mobile-first approach with dedicated mobile navbar
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **Internationalization**: English/Portuguese language toggle
- **Contact Form**: EmailJS integration for direct messaging
- **Dark Theme**: Professional minimalist aesthetic with glass morphism effects

## Tech Stack

### Core
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **JavaScript** - Primary language

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics
  - `@react-three/fiber` - React renderer for Three.js
  - `@react-three/drei` - Useful helpers for React Three Fiber

### Other
- **React Router** - Client-side routing
- **EmailJS** - Contact form backend
- **React Icons** - Icon library
- **React Tilt** - Tilt effect on hover
- **React Vertical Timeline** - Experience timeline component

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── canvas/          # Three.js components (Earth, Stars)
│   │   ├── Navbar.jsx       # Desktop navigation with scroll spy
│   │   ├── MobileNavbar.jsx # Mobile navigation with scroll spy
│   │   ├── Hero.jsx         # Hero section with 3D background
│   │   ├── About.jsx        # About section with service cards
│   │   ├── Experience.jsx   # Work experience timeline
│   │   ├── Tech.jsx         # Technology skills showcase
│   │   ├── Projects.jsx     # Project cards with links
│   │   ├── Contact.jsx      # Contact form with EmailJS
│   │   └── Footer.jsx       # Footer component
│   ├── hooks/
│   │   └── useScrollSpy.js  # Custom hook for scroll-based navigation
│   ├── contexts/
│   │   └── LanguageContext.jsx # Language toggle context
│   ├── constants/
│   │   └── languages.js     # Internationalization content
│   ├── hoc/
│   │   └── SectionWrapper.jsx # Higher-order component for sections
│   ├── utils/
│   │   └── motion.js        # Framer Motion preset variants
│   ├── assets/              # Images and icons
│   ├── styles.js            # Custom text styles
│   └── index.css            # Global styles and Tailwind directives
├── public/                  # Static assets
├── tailwind.config.cjs      # Tailwind configuration with design tokens
└── vite.config.js           # Vite configuration
```

## Design System

### Color Palette
- **Primary**: `#0A0F1C` (Deep Navy) - Background/main color
- **Secondary**: `#6366F1` (Indigo) - Accent/interactive elements
- **Text Primary**: `#F8FAFC` (Slate 50)
- **Text Secondary**: `#94A3B8` (Slate 400)
- **Gray Scale**: 50-900 for backgrounds and subtle elements

### Typography
- **Font**: Inter (variable font)
- **Weights**: 400, 500, 600, 700
- **Scale**: Display (56px) → H1 (40px) → H2 (32px) → H3 (28px) → Body (16px) → Small (14px)

### Spacing
- Based on 4px/8px grid system
- Section padding: 6rem vertical (desktop), 4rem (mobile)
- Horizontal padding: 2rem (desktop), 1.5rem (mobile)

## Getting Started

### Prerequisites
- Node.js ^24.0.0
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vitorluigiorsini/vitororsini.git
cd vitororsini
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your EmailJS credentials:
```
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_EMAILJS_API=your_emailjs_api_key
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

6. Preview production build:
```bash
npm run preview
```

## Key Components

### Scroll Spy Navigation
The navigation automatically highlights the current section as you scroll. Implemented via a custom `useScrollSpy` hook that uses Intersection Observer logic to detect which section is currently in view.

### Language Context
Toggle between English and Portuguese throughout the entire application. All text content is managed through `constants/languages.js`.

### Section Wrapper
Higher-order component that wraps each section with consistent styling, animations, and ID anchors for navigation.

## Accessibility
- Focus-visible outlines on interactive elements
- Proper color contrast ratios (4.5:1 minimum)
- Semantic HTML structure
- Keyboard navigation support
- ARIA labels on icon buttons

## Performance
- Optimized Three.js assets
- Lazy-loaded components
- Responsive images
- Code splitting via Vite
- Passive scroll listeners

## License

MIT License - feel free to use this project as a template for your own portfolio.

## Author

**Vitor Orsini** - Software Engineer

- [GitHub](https://github.com/vitorluigiorsini/)
- [LinkedIn](https://www.linkedin.com/in/vitorluigiorsini/)
