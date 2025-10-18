// Ant Design UI components used to compose the informational cards
import { Card, Typography } from 'antd';
// useLocation gives access to the current route (pathname, search, state)
import { useLocation } from 'react-router-dom';

// Rename Paragraph to AntParagraph to avoid naming conflicts and keep intent explicit
const { Paragraph: AntParagraph } = Typography;

// RouteInfo component: small informational panel shown on the Settings page sidebar
const RouteInfo = () => {
  // Read the current location so we can display the active pathname for demo purposes
  const location = useLocation();

  return (
    <>
      {/* Card showing current route and a short descriptor of the nested relationship */}
      <Card style={{ marginBottom: '16px', backgroundColor: '#f0f2f5' }}>
        <AntParagraph>
          <strong>Current Route:</strong> {location.pathname}
        </AntParagraph>
        <AntParagraph>
          <strong>Route Structure:</strong> Dashboard {'>'} Settings (nested route)
        </AntParagraph>
      </Card>

      {/* Informational card describing settings persistence and benefits */}
      <Card title="Settings Information">
        <p>
          <strong>Settings Persistence:</strong><br />
          In a real application, these settings would be saved to a database 
          or local storage and persist across sessions.
        </p>

        <p>
          <strong>Nested Route Benefits:</strong><br />
          Settings are logically grouped under the dashboard while maintaining 
          the same navigation structure.
        </p>

        <p>
          <strong>Form Handling:</strong><br />
          This demonstrates Ant Design's Form component with various input types 
          including switches, selects, and buttons.
        </p>
      </Card>

      {/* Card that visually outlines the nested route structure for clarity */}
      <Card title="Route Structure" style={{ marginTop: '16px' }}>
        <ul style={{ paddingLeft: '20px' }}>
          <li>/dashboard (parent route)</li>
          <li style={{ marginLeft: '20px' }}>
            /dashboard/settings (this page)
          </li>
          <li style={{ marginLeft: '20px' }}>
            /dashboard/profile (sibling route)
          </li>
        </ul>
        <p style={{ marginTop: '12px' }}>
          Both nested routes share the same layout and sidebar navigation 
          provided by the parent DashboardPage component.
        </p>
      </Card>
    </>
  );
};

export default RouteInfo;