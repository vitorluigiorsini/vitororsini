# AGENTS.md - Project Context for Agents

## Overview
This is a React portfolio project built with Vite, featuring a modern 3D hero section using Three.js and Framer Motion for animations. The project implements a dark, minimalist UI/UX design with responsive layout.

## Key Information
- **Language**: JavaScript (JSX), not TypeScript
- **Styling**: Tailwind CSS with custom design system (see IMPROVEMENT_PLAN.md for details)
- **State Management**: React Context for language switching (LanguageContext.jsx)
- **Animation**: Framer Motion for page transitions and micro-interactions
- **3D Elements**: @react-three/fiber and @react-three/drei for Three.js integration
- **Form Handling**: EmailJS for contact form
- **Icons**: React Icons

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Important Files & Conventions
### Configuration
- `vite.config.js` - Vite configuration
- `tailwind.config.cjs` - Tailwind CSS configuration (design system tokens)
- `postcss.config.cjs` - PostCSS setup
- `src/index.css` - Base styles and Tailwind directives
- `src/styles.js` - Custom text styles using the design system

### Component Structure
- `src/components/` - All UI components
  - Layout: Navbar.jsx, MobileNavbar.jsx, Footer.jsx
  - Sections: Hero.jsx, About.jsx, Experience.jsx, Tech.jsx, Projects.jsx, Feedbacks.jsx (currently commented out in App.jsx)
  - Visual: canvas/ (Three.js components)
- `src/contexts/LanguageContext.jsx` - Language toggling (English/Portuguese)
- `src/utils/motion.js` - Framer Motion presets

### Important Notes
1. The Feedback component exists (`src/components/Feedbacks.jsx`) but is commented out in `App.jsx` line 32. To enable, uncomment the `<Feedbacks />` line.
2. All styling should follow the design system defined in `tailwind.config.cjs` and documented in `IMPROVEMENT_PLAY.md`.
3. When adding text content, use the LanguageContext for internationalization or follow the existing pattern in components.
4. Images should be optimized (preferably WebP/AVIF) and placed in `src/assets/` or `public/`.
5. The project uses a 4px/8px grid system for spacing (see IMPROVEMENT_PLAN.md).
6. Interactive elements should follow the button system variants (primary, secondary, ghost) with appropriate hover states.
7. Accessibility features are implemented: focus-visible outlines, proper contrast, semantic HTML.

## Dependencies of Note
- `@emailjs/browser`: Contact form functionality
- `@react-three/fiber` & `@react-three/drei`: 3D background
- `framer-motion`: Animations and transitions
- `react-tilt`: Tilt effect on certain elements
- `react-vertical-timeline-component`: Experience timeline
- `react-icons`: Icon library

## Things to Avoid
- Don't introduce TypeScript files without migrating the entire project
- Don't override Tailwind configuration without consulting the design system
- Don't add large unoptimized images
- Don't bypass the LanguageContext for hardcoded strings
- Don't remove the Three.js background without understanding the visual impact
