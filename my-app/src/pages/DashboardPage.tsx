// Import the dashboard overview and sidebar components used in the dashboard layout
import DashboardOverview from '../components/DashboardPage/DashboardOverview';
import DashboardSidebar from '../components/DashboardPage/DashboardSidebar';
// Hook that provides dashboard-specific data such as current location and menu items
import { useDashboardData } from '../hooks/DashboardPage/useDashboardData';
// Ant Design Layout primitives
import { Layout } from 'antd';
// Outlet is used for nested routing inside the dashboard
import { Outlet } from 'react-router-dom';

// Destructure Content from Layout for easier usage below
const { Content } = Layout;

// DashboardPage component: top-level layout for the dashboard and its nested routes
const DashboardPage = () => {
  // Get routing/location info and menu items from the dashboard hook
  const { location, menuItems } = useDashboardData();
  // loginState may be passed via location.state from the login flow
  const loginState = location.state; // passed from login

  // Render the main dashboard layout
  return (
    // Outer Layout ensures the dashboard takes at least most of the vertical space
    <Layout style={{ minHeight: '80vh' }}>
      {/* Sidebar component receives location and menu items to render navigation */}
      <DashboardSidebar location={location} menuItems={menuItems} />

      {/*
        Main content area next to the sidebar.
        The inner Layout provides spacing around the content area.
      */}
      <Layout style={{ padding: '0 24px 24px' }}>
        {/*
          Content area:
          - padded and given a white background to look like a card
          - shows the DashboardOverview only when the path is exactly '/dashboard'
          - uses Outlet to render nested routes (profile, settings, etc.)
        */}
        <Content style={{ padding: '24px', background: '#fff', marginTop: '16px' }}>
          {location.pathname === '/dashboard' && (
            // Show a high-level overview when at the dashboard root
            <DashboardOverview location={location} loginState={loginState} />
          )}
          {/* Outlet renders the currently matched child route inside the dashboard */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
