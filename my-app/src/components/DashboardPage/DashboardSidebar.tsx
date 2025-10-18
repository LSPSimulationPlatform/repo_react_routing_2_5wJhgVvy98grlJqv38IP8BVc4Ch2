// Import UI building blocks from Ant Design
import { Card, Typography, Tag } from 'antd';
// NavLink used for creating in-app links to nested dashboard routes
import { NavLink } from 'react-router-dom';

// Destructure common Typography components for convenience
const { Title, Paragraph } = Typography;

// DashboardOverview component
// Props:
// - location: react-router location object (pathname, search, state)
// - loginState: optional object with login details passed from the login flow
const DashboardOverview = ({ location, loginState }:  { location: any, loginState: any}) =>{


  return (
    <div>
      {/* Page header */}
      <Title level={2}>Dashboard Overview</Title>

      {/*
        If loginState exists, show a welcome card with details.
        This demonstrates passing state between routes and conditional rendering.
      */}
      {loginState && (
        <Card style={{ marginBottom: '24px', backgroundColor: '#f6ffed' }}>
          <Title level={4}>
            {/* Greet the user by name and show a green 'Logged In' tag */}
            Welcome, {loginState.user}! <Tag color="green">Logged In</Tag>
          </Title>
          <Paragraph>
            <strong>Login Time:</strong> {loginState.loginTime}
          </Paragraph>
          <Paragraph>
            <strong>Message:</strong> {loginState.message}
          </Paragraph>
        </Card>
      )}

      {/* Card showing the current route information from the location object */}
      <Card title="Current Route Information" style={{ marginBottom: '24px' }}>
        <p><strong>Current Path:</strong> {location.pathname}</p>
        <p><strong>Search Params:</strong> {location.search || 'None'}</p>
        <p><strong>Has State:</strong> {location.state ? 'Yes' : 'No'}</p>
        {/*
          If location.state exists, render a details block with the pretty-printed JSON
          so developers/users can inspect what was passed via navigation state.
        */}
        {location.state && (
          <details style={{ marginTop: '12px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
              View State Data
            </summary>
            <pre style={{ 
              backgroundColor: '#f5f5f5', 
              padding: '12px', 
              marginTop: '8px',
              borderRadius: '4px',
              overflow: 'auto'
            }}>
              {JSON.stringify(location.state, null, 2)}
            </pre>
          </details>
        )}
      </Card>

      {/* Card that explains the dashboard features and provides quick links */}
      <Card title="Dashboard Features">
        <Paragraph>
          This dashboard demonstrates several important React Router concepts:
        </Paragraph>
        <ul>
          <li><strong>Nested Routing:</strong> Use the sidebar to navigate to Profile and Settings</li>
          <li><strong>Outlet Component:</strong> Child routes render in the main content area</li>
          <li><strong>useLocation Hook:</strong> View current route information above</li>
          <li><strong>State Passing:</strong> Login state is displayed when available</li>
          <li><strong>Protected Routes:</strong> This page requires login navigation</li>
        </ul>

        <Paragraph style={{ marginTop: '16px' }}>
          <strong>Try navigating to:</strong>
        </Paragraph>
        <ul>
          <li><NavLink to="/dashboard/profile">Profile Page</NavLink> - See nested routing in action</li>
          <li><NavLink to="/dashboard/settings">Settings Page</NavLink> - Another nested route</li>
        </ul>
      </Card>
    </div>
  );
};

export default DashboardOverview;
