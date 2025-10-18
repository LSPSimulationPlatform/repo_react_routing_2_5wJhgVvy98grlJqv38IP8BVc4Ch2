// Import the Menu and Layout components from Ant Design
import { Menu, Layout } from 'antd';
// Import NavLink to create navigation links and useLocation to read the current path
import { NavLink, useLocation } from 'react-router-dom';
// Import a few icons used in the navigation menu
import { HomeOutlined, InfoCircleOutlined, DashboardOutlined } from '@ant-design/icons';

// Destructure Header from Layout for convenience
const { Header } = Layout;

// Navbar functional component
const Navbar = () => {
  // Get the current location (URL path) from react-router so we can highlight the active menu item
  const location = useLocation();

  // Define the menu items for the navigation bar. Each item contains a key, an icon and a label.
  // The label uses NavLink so clicking updates the router and allows active styles from react-router.
  const menuItems = [
    {
      // The key should match the route path so selectedKeys can highlight it
      key: '/',
      // Icon shown before the label
      icon: <HomeOutlined />,
      // NavLink navigates to the root path
      label: <NavLink to="/">Home</NavLink>,
    },
    {
      key: '/about',
      icon: <InfoCircleOutlined />,
      label: <NavLink to="/about">About</NavLink>,
    },

    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: <NavLink to="/dashboard">Dashboard</NavLink>,
    },

  ];

  // Render the header and menu
  return (
    // Ant Design Header wrapper; remove default padding to use full width
    <Header style={{ padding: 0 }}>
      {/* Container to align the app title and the menu horizontally */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* App title / brand area on the left */}
        <div style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginRight: '40px', paddingLeft: '24px' }}>
          EduApp
        </div>
        {/*
          The Menu component from Ant Design.
          - theme="dark" gives it dark styling
          - mode="horizontal" lays items out in a row
          - selectedKeys uses the current location pathname to highlight the active link
          - items is the array of menu item definitions above
        */}
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{ flex: 1, minWidth: 0 }}
        />
      </div>
    </Header>
  );
};

// Export the Navbar as the default export from this module
export default Navbar;