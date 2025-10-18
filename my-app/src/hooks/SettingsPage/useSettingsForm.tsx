// React hook for local component state
import { useState } from 'react';
// Ant Design message utility for toast notifications
import { message } from 'antd';

// Custom hook that manages the settings form submit state and handler
export const useSettingsForm = () => {
  // loading indicates whether the form is currently saving
  const [loading, setLoading] = useState(false);

  // onFinish is the function passed to the form's onFinish prop.
  // It accepts the form values and performs the save operation asynchronously.
  const onFinish = async (values: any) => {

    // Set loading to true so the UI can show a spinner/disable submit
    setLoading(true);
    try {
      // Log the submitted values (replace with real API call in a real app)
      console.log('Settings saved:', values);
      // Burada API çağrısı edə bilərsiniz
      // Simulate an async API call with a short delay
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulyasiya
      // Show a success toast when the save completes
      message.success('Settings saved successfully!');
    } catch (error) {
      // Show an error toast if something goes wrong
      message.error('Error saving settings');
    } finally {
      // Always clear the loading flag when finished
      setLoading(false);
    }
  };

  // Return the loading state and the submit handler to be used by the form component
  return {
    loading,
    onFinish
  };
};
