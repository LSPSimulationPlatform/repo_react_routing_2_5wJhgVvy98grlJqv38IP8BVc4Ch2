// Simple hook that returns static data used by the About page
// This keeps the About page clean and separates data from presentation
export const useAboutData = () => {
  // List of technologies the sample app demonstrates
  const technologies = [
    'React 18+',
    'React Router DOM v6+',
    'Ant Design',
    'TypeScript',
    'Vite',
    'Modern Hooks',
    'Functional Components',
  ];

  // Array describing the routing techniques and patterns shown in the app
  const routingFeatures = [
    'Static Routes (/about, /contact)',
    'Dynamic Routes (/questions/:id)',
    'Nested Routes (/dashboard/profile)',
    'Protected Routes (Dashboard)',
    'Route Parameters (useParams)',
    'Navigation (useNavigate)',
    'Location State (useLocation)',
  ];

  // Learning objectives presented to the user on the About page
  const learningObjectives = [
    'How to set up React Router DOM v6+ with modern syntax',
    'Implementing nested routes with Outlet components',
    'Using React Router hooks (useNavigate, useParams, useLocation)',
    'Building CRUD operations with local state management',
    'Creating protected routes and navigation guards',
    'Integrating Ant Design with React Router for beautiful UIs',
  ];

  // Return the composed data so the About page can render it
  return { technologies, routingFeatures, learningObjectives };
};
