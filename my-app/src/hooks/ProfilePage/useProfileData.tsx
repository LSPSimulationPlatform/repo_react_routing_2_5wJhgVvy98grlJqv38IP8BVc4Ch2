// Import Ant Design utilities used by this hook
import { Form, message } from 'antd';

// Custom hook providing form instance, mock user data, and submit handler
export const useProfileData = () => {
  // Create an Ant Design form instance that can be passed to ProfileForm
  const [form] = Form.useForm();

  // Example user data used to populate the profile info and form initial values
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, City, State 12345',
    bio: 'React developer passionate about creating educational content and modern web applications.',
    skills: ['React', 'TypeScript', 'Node.js', 'React Router', 'Ant Design'],
    joinDate: '2023-01-15',
  };

  // Handler invoked when the profile form is submitted successfully
  // - logs the submitted values and shows a success toast message
  const onFinish = (values: any) => {
    console.log('Profile updated:', values);
    message.success('Profile updated successfully!');
  };

  // Return the pieces needed by the Profile page and its children
  return { form, userData, onFinish };
};
