// Import a hook that provides data used by the About page
import { useAboutData } from '../hooks/AboutPage/useAboutData';
// Import Ant Design components used to structure the content
import { Card, Typography, Row, Col, Tag } from 'antd';
// Import useLocation to display current route information for demo purposes
import { useLocation } from 'react-router-dom';


// Destructure Title and Paragraph from Typography for concise usage below
const { Title, Paragraph } = Typography;

// AboutPage component: explains the app and displays tech/routing info
const AboutPage = () => {
  // Read the current location object from react-router to show path/search/state
  const location = useLocation();
  // Get static data used to populate the technologies, routing features, and objectives
  const { technologies, routingFeatures, learningObjectives } = useAboutData();

  return (
    // Outer padding to give the card breathing room
    <div style={{ padding: '24px' }}>
      <Card>
        {/* Main page title */}
        <Title level={1}>About This Educational App</Title>
        {/* Short description paragraph explaining the purpose */}
        <Paragraph style={{ fontSize: '16px', marginBottom: '24px' }}>
          This React application serves as a comprehensive educational resource for learning
          modern React development patterns, particularly focusing on routing with React Router DOM v6+.
        </Paragraph>

        {/* Current Route Info - useful for demonstrating location object contents */}
        <Title level={2}>Current Route Information</Title>
        <Card size="small" style={{ marginBottom: '24px', backgroundColor: '#f0f2f5' }}>
          <p><strong>Current Path:</strong> {location.pathname}</p>
          <p><strong>Search:</strong> {location.search || 'None'}</p>
          <p><strong>State:</strong> {location.state ? JSON.stringify(location.state) : 'None'}</p>
        </Card>

        {/* Technologies & Routing Features section arranged in two columns */}
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <Title level={3}>Technologies Used</Title>
            {/* Display each technology as a Tag */}
            <div style={{ marginBottom: '16px' }}>
              {technologies.map(tech => (
                <Tag key={tech} color="blue" style={{ marginBottom: '8px' }}>
                  {tech}
                </Tag>
              ))}
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <Title level={3}>Routing Features Demonstrated</Title>
            {/* List the routing features (static, nested, dynamic, protected, etc.) */}
            <ul>
              {routingFeatures.map((feature, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  {feature}
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Learning Objectives section describing outcomes for the learner */}
        <Title level={3}>Learning Objectives</Title>
        <Paragraph>By exploring this application, you will understand:</Paragraph>
        <ul>
          {learningObjectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default AboutPage;
