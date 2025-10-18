// Ant Design form components and utilities used to build the settings form
import { Form, Switch, Select, Button, Typography, Divider } from 'antd';

// Extract Title from Typography for concise use
const { Title } = Typography;
// Extract Option from Select to declare select options
const { Option } = Select;

// SettingsForm is a controlled form component that receives:
// - form: Ant Design form instance
// - onFinish: submit handler to save settings
// - loading: boolean to indicate save in progress
const SettingsForm = ({ form, onFinish, loading }:  { form: any, onFinish: any, loading: any  })=> {
  return (
    // Form configuration:
    // - layout="vertical" places labels above inputs
    // - onFinish is called with validated values on submit
    // - initialValues provides sensible defaults for each setting
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        notifications: true,
        emailUpdates: false,
        theme: 'light',
        language: 'en',
        autoSave: true,
        soundEffects: false
      }}
    >
      {/* Notifications section */}
      <Title level={4}>Notifications</Title>
      {/* Toggle for push notifications (boolean stored in form) */}
      <Form.Item name="notifications" valuePropName="checked">
        <Switch checkedChildren="ON" unCheckedChildren="OFF" />
        <span style={{ marginLeft: '12px' }}>Enable push notifications</span>
      </Form.Item>

      {/* Toggle for email update preference */}
      <Form.Item name="emailUpdates" valuePropName="checked">
        <Switch checkedChildren="ON" unCheckedChildren="OFF" />
        <span style={{ marginLeft: '12px' }}>Receive email updates</span>
      </Form.Item>

      <Divider />

      {/* Appearance settings such as theme and language */}
      <Title level={4}>Appearance</Title>
      <Form.Item label="Theme" name="theme">
        <Select placeholder="Select theme">
          <Option value="light">Light Theme</Option>
          <Option value="dark">Dark Theme</Option>
          <Option value="auto">Auto (System)</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Language" name="language">
        <Select placeholder="Select language">
          <Option value="en">English</Option>
          <Option value="es">Spanish</Option>
          <Option value="fr">French</Option>
          <Option value="de">German</Option>
        </Select>
      </Form.Item>

      <Divider />

      {/* Application behavior toggles */}
      <Title level={4}>Application Behavior</Title>
      <Form.Item name="autoSave" valuePropName="checked">
        <Switch checkedChildren="ON" unCheckedChildren="OFF" />
        <span style={{ marginLeft: '12px' }}>Auto-save changes</span>
      </Form.Item>

      <Form.Item name="soundEffects" valuePropName="checked">
        <Switch checkedChildren="ON" unCheckedChildren="OFF" />
        <span style={{ marginLeft: '12px' }}>Enable sound effects</span>
      </Form.Item>

      {/* Submit and reset actions */}
      <Form.Item style={{ marginTop: '32px' }}>
        {/* Primary submit button shows loading spinner when saving */}
        <Button type="primary" htmlType="submit" size="large" loading={loading}>
          Save Settings
        </Button>
        {/* Reset button clears the form back to initialValues */}
        <Button style={{ marginLeft: '12px' }} onClick={() => form.resetFields()}>
          Reset to Defaults
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SettingsForm;