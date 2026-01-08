const projects = [
 
  {
    id: 'proj-dashboard',
    title: 'Interactive SaaS Dashboard',
    description: 'Responsive dashboard with charts, tables, filters, search, and dark/light mode. Focused on accessibility and performance.',
    tags: ['React','Next.js','Tailwind CSS','Dashboard'],
    repo: 'https://github.com/YOUR_GITHUB_USERNAME/interactive-saas-dashboard',
    live: '',
    image: '',
    problem: 'Needed a performant, accessible admin UI with complex data views.',
    solution: 'Built reusable components for charts and tables, implemented keyboard navigation and ARIA patterns, and optimized renders for large datasets.',
    architecture: 'Next.js frontend with modular components, data fetching layers, and theming support.',
    challenges: 'Balancing feature-rich UI with performance and accessibility.',
    learnings: 'Design components that can be composed; prioritize accessibility as part of the component API.'
  },
  {
    id: 'proj-ecommerce',
    title: 'E-Commerce / Product Management Platform',
    description: 'Admin and user dashboards with full CRUD, auth, and database-backed storage.',
    tags: ['Full-Stack','Node.js','MongoDB','Express'],
    repo: 'https://github.com/YOUR_GITHUB_USERNAME/ecommerce-product-platform',
    live: '',
    image: '',
    problem: 'Needed a full product management flow with admin controls and customer-facing storefront.',
    solution: 'Implemented frontend dashboards, backend APIs, authentication, and persistent storage with deployment to Vercel and Railway.',
    architecture: 'React/Next.js frontend, Node/Express backend, MongoDB/MySQL persistence.',
    challenges: 'Auth, data modeling, and deploy pipeline orchestration.',
    learnings: 'Maintain clear separation between frontend and backend responsibilities and keep APIs versioned.'
  },
  {
    id: 'proj-portfolio',
    title: 'Personal Portfolio Website',
    description: 'This portfolio site built with React and Tailwind CSS, focused on accessibility, semantic HTML, and performance.',
    tags: ['React','Tailwind CSS','Accessibility'],
    repo: 'https://github.com/YOUR_GITHUB_USERNAME/personal-portfolio',
    live: '',
    image: '',
    problem: 'Showcase work with performance and accessibility in mind.',
    solution: 'Built a lightweight, semantic site with keyboard navigation and optimized assets.',
    architecture: 'Single-page React app with modular components and responsive design.',
    challenges: 'Balancing polish with bundle size.',
    learnings: 'Optimize images and defer non-critical JS to improve perceived performance.'
  }
]

export default projects
