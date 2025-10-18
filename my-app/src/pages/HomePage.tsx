// Import the custom hook that provides the home page features
import { useHomeFeatures } from '../hooks/Home/useHomeFeatures';
// Import Ant Design UI components used on this page
import { Card, Row, Col, Typography, Button } from 'antd';


// Destructure Title and Paragraph components from Ant Design's Typography
const { Title, Paragraph } = Typography;

// HomePage component -- displays an introduction and a grid of feature cards
const HomePage = () => {
  // Call the hook to get an array of features to render on the page
  const features = useHomeFeatures();

  // Render the page
  return (
    // Outer container with padding and a minimum height to keep footer placement stable
    <div style={{ padding: '24px', minHeight: '80vh' }}>
      {/* Header / Intro: centered title and descriptive paragraph */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        {/* Page title using Ant Design's Typography Title component */}
        <Title level={1}>Welcome to Educational React App</Title>
        {/* Short description text, constrained to a readable width */}
        <Paragraph style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
          This app demonstrates modern React patterns including React Router DOM v6+,
          nested routing, CRUD operations, and Ant Design integration. Perfect for learning!
        </Paragraph>
      </div>

      {/*
        Feature grid:
        - Row provides gutters between grid items
        - justify="center" centers the content horizontally
      */}
      <Row gutter={[24, 24]} justify="center">
        {/* Map over features from the hook and create a responsive column for each */}
        {features.map((feature, index) => (
          // Col defines responsive widths: full width on xs, one-third on md
          <Col xs={24} md={8} key={index}>
            {/*
              Card displays the feature info:
              - hoverable gives a subtle hover effect
              - style centers text and ensures cards stretch to equal height
              - actions is used to render the Explore button
            */}
            <Card
              hoverable
              style={{ textAlign: 'center', height: '100%' }}
              actions={[
                // Primary button that calls the feature's action when clicked
                <Button type="primary" onClick={feature.action} key="explore">
                  Explore
                </Button>
              ]}
            >
              {/* Optional icon area for the feature */}
              <div style={{ marginBottom: '16px' }}>{feature.icon}</div>
              {/* Feature title */}
              <Title level={3}>{feature.title}</Title>
              {/* Short description text for the feature */}
              <Paragraph>{feature.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

// Export the component as default so it can be used by the route definitions
export default HomePage;
