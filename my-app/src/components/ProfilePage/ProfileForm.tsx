// Ant Design components used to build the profile edit form
import { Card, Form, Input, Button, Row, Col } from 'antd';

// ProfileForm receives a form instance, initial user data, and an onFinish handler
const ProfileForm = ({ form, userData, onFinish } :  { form: any, userData: any, onFinish: any }) => {
 return (
    // Card provides a titled container for the form
    <Card title="Edit Profile">
      {/*
        Form props:
        - form: Ant Design form instance controlled by the parent hook
        - layout="vertical": labels appear above inputs
        - onFinish: called when form validation passes and the user submits
        - initialValues: prefill the form with the provided user data
      */}
      <Form form={form} layout="vertical" onFinish={onFinish} initialValues={userData}>
        {/* First row: name and email side-by-side on md+ screens */}
        <Row gutter={16}>
          <Col xs={24} md={12}>
            {/* Full Name field with required validation */}
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: 'Please enter your name!' }]}
            >
              <Input placeholder="Your full name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            {/* Email field with required + email format validation */}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please enter your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
            >
              <Input placeholder="your.email@example.com" />
            </Form.Item>
          </Col>
        </Row>

        {/* Second row: phone and join date */}
        <Row gutter={16}>
          <Col xs={24} md={12}>
            {/* Phone number - required */}
            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: 'Please enter your phone!' }]}
            >
              <Input placeholder="Your phone number" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            {/* Join Date displayed as read-only (disabled input) */}
            <Form.Item label="Join Date" name="joinDate">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        {/* Address field spanning full width */}
        <Form.Item label="Address" name="address">
          <Input placeholder="Your address" />
        </Form.Item>

        {/* Bio textarea for a short personal description */}
        <Form.Item label="Bio" name="bio">
          <Input.TextArea rows={4} placeholder="Tell us about yourself..." />
        </Form.Item>

        {/* Submit button - triggers validation and calls onFinish when valid */}
        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Update Profile
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ProfileForm;
