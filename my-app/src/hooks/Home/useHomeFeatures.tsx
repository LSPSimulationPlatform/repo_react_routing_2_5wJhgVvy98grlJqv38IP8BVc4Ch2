// Import the navigation hook from react-router so we can programmatically change routes
import { useNavigate } from 'react-router-dom';
// Import icons used for each feature card
import { BookOutlined, UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';

// Custom hook that returns an array of feature definitions used on the Home page
export const useHomeFeatures = () => {
  // Get the navigate function from react-router to perform programmatic navigation
  const navigate = useNavigate();

  // Array of feature objects. Each object contains:
  // - icon: a JSX element to display
  // - title: short title string
  // - description: brief explanation shown on the card
  // - action: a function invoked when the user clicks the card action (navigates to a route)
  const features = [
    {
      // Learn Routing feature uses the Book icon styled for prominence
      icon: <BookOutlined style={{ fontSize: '48px', color: '#1890ff' }} />,
      // Title text shown on the card
      title: 'Learn Routing',
      // Description shown beneath the title
      description: 'Explore React Router DOM v6+ with static, nested, and dynamic routes.',
      // Action navigates the user to the About page when triggered
      action: () => navigate('/about'),
    },
    {
      // Dashboard feature icon and styles
      icon: <UserOutlined style={{ fontSize: '48px', color: '#52c41a' }} />,
      title: 'Dashboard Features',
      description: 'Experience nested routing with protected dashboard and profile pages.',
      // Action navigates to the login page (example of a protected flow entry)
      action: () => navigate('/login'),
    },
    {
      // CRUD operations feature icon and styles
      icon: <QuestionCircleOutlined style={{ fontSize: '48px', color: '#f5222d' }} />,
      title: 'CRUD Operations',
      description: 'See full Create, Read, Update, Delete functionality in action.',
      // Action navigates to a questions/CRUD demo route
      action: () => navigate('/questions'),
    },
  ];

  // Return the array so consuming components (like HomePage) can render the features
  return features;
};
