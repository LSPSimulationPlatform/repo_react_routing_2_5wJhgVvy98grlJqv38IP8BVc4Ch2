// Import Profile-related components used on this nested dashboard route
import ProfileAbout from '../components/ProfilePage/ProfileAbout';
import ProfileForm from '../components/ProfilePage/ProfileForm';
import ProfileInfo from '../components/ProfilePage/ProfileInfo';
import ProfileRouteInfo from '../components/ProfilePage/ProfileRouteInfo';
// Hook that provides form instance, user data and submit handler for the profile page
import { useProfileData } from '../hooks/ProfilePage/useProfileData';
// Ant Design layout / typography primitives
import { Typography, Row, Col } from 'antd';


// Destructure Title and Paragraph for concise usage below
const { Title, Paragraph } = Typography;

// ProfilePage component - a nested route under /dashboard/profile
const ProfilePage = () => {
  // Get the Ant Design form instance, existing user data and the form submit handler
  const { form, userData, onFinish } = useProfileData();

  return (
    <div>
      {/* Page header */}
      <Title level={2}>User Profile</Title>
      {/* Short explanation indicating this route is nested under the dashboard */}
      <Paragraph>
        This is a nested route under <code>/dashboard/profile</code>.
        It demonstrates how nested routing works with the Outlet component.
      </Paragraph>

      {/* Component that displays route-related debug/info for this profile route */}
      <ProfileRouteInfo />

      {/* Two-column responsive layout:
          - left column: profile info (read-only)
          - right column: editable profile form and additional about content
      */}
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={8}>
          {/* Read-only user information */}
          <ProfileInfo userData={userData} />
        </Col>
        <Col xs={24} lg={16}>
          {/* Editable form for updating the user profile */}
          <ProfileForm form={form} userData={userData} onFinish={onFinish} />
          {/* Supplementary information/about for the profile */}
          <ProfileAbout />
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
