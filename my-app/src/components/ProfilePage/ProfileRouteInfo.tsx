// Import Ant Design Card and Typography for simple, styled layout
import { Card, Typography } from 'antd';
// useLocation exposes the current route information from react-router
import { useLocation } from 'react-router-dom';

// Destructure Paragraph for concise usage below
const { Paragraph } = Typography;

// ProfileRouteInfo: small component that displays route/debug info for the profile page
const ProfileRouteInfo = () => {
  // Grab the location object so we can show the current pathname (and other info if needed)
  const location = useLocation();

  return (
    // Card with a subtle background to visually separate route info from other content
    <Card style={{ marginBottom: '16px', backgroundColor: '#f0f2f5' }}>
      {/* Show the current pathname from the location object */}
      <Paragraph>
        <strong>Current Route:</strong> {location.pathname}
      </Paragraph>
      {/* Explain the nesting structure for clarity to learners */}
      <Paragraph>
        <strong>Route Structure:</strong> Dashboard {'>'} Profile (nested route)
      </Paragraph>
    </Card>
  );
};

export default ProfileRouteInfo;
