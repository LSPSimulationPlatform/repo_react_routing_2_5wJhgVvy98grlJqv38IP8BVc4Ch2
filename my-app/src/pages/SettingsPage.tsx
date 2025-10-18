// Import the small RouteInfo panel and the form used on this settings page
import RouteInfo from '../components/SettingsPage/RouteInfo';
import SettingsForm from '../components/SettingsPage/SettingsForm';
// Hook that provides loading state and submit handler for the settings form
import { useSettingsForm } from '../hooks/SettingsPage/useSettingsForm';
// Ant Design layout and typography components
import { Card, Typography, Row, Col } from 'antd';
import { Form } from 'antd';


// Destructure Title and Paragraph for concise usage
const { Title, Paragraph } = Typography;

// SettingsPage component: nested under /dashboard/settings
const SettingsPage = () => {
  // Create a local Ant Design form instance to control the SettingsForm
  const [form] = Form.useForm();
  // useSettingsForm provides loading state and the onFinish handler used when submitting
  const { loading, onFinish } = useSettingsForm();

  return (
    <div>
      {/* Page heading */}
      <Title level={2}>Application Settings</Title>
      <Paragraph>
        Another nested route example under <code>/dashboard/settings</code>.
        Configure your application preferences here.
      </Paragraph>

      {/* Two-column responsive layout: main form area + route info sidebar */}
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <Card title="User Preferences">
            {/* SettingsForm is a controlled form component. We pass:
                - form: the form instance
                - onFinish: submit handler from the hook
                - loading: boolean used to disable the submit button while saving
            */}
            <SettingsForm
              form={form} 
              onFinish={onFinish} 
              loading={loading} 
            />
          </Card>
        </Col>

        {/* Sidebar area showing route/debug info */}
        <Col xs={24} lg={8}>
          <RouteInfo />
        </Col>
      </Row>
    </div>
  );
};

export default SettingsPage;