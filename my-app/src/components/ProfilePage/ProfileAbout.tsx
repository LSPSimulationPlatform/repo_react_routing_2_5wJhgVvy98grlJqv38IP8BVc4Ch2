// Ant Design components used to build the informational card
import { Card, Typography } from 'antd';

// Extract Paragraph from Typography to keep JSX concise
const { Paragraph } = Typography;

// Small presentational component that explains the Profile nested route
const ProfileAbout = () => {
  return (
    // Card with a title that explains the topic of this block
    <Card title="About Nested Routing" style={{ marginTop: '16px' }}>
      {/* Short paragraph introducing the list below */}
      <Paragraph>This Profile page demonstrates:</Paragraph>
      {/* Bulleted list of routing concepts showcased by this nested page */}
      <ul>
        <li><strong>Nested Route Structure:</strong> /dashboard/profile</li>
        <li><strong>Outlet Usage:</strong> Renders inside DashboardPage layout</li>
        <li><strong>Shared Layout:</strong> Uses the same sidebar navigation</li>
        <li><strong>Route Isolation:</strong> Independent from other dashboard pages</li>
      </ul>
    </Card>
  );
};

export default ProfileAbout;
