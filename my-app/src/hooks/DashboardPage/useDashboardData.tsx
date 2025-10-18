// Import hooks and components from react-router used to read location and create links
import { useLocation, NavLink } from 'react-router-dom';
// Import icons used for the dashboard menu
import { UserOutlined, SettingOutlined, DashboardOutlined } from '@ant-design/icons';

// Custom hook that centralizes dashboard-specific data (location + menu items)
export const useDashboardData = () => {
  // Read the current location object from react-router. This is used by the
  // dashboard layout and sidebar to determine which menu item is active and to
  // access any state passed via navigation (e.g., login state).
  const location = useLocation();

  // Define the menu items shown in the dashboard sidebar. Each entry contains:
  // - key: route path used for selecting the active menu item
  // - icon: an Ant Design icon component displayed beside the label
  // - label: a NavLink that navigates to the target route
  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: <NavLink to="/dashboard">Overview</NavLink>,
    },
    {
      key: '/dashboard/profile',
      icon: <UserOutlined />,
      label: <NavLink to="/dashboard/profile">Profile</NavLink>,
    },
    {
      key: '/dashboard/settings',
      icon: <SettingOutlined />,
      label: <NavLink to="/dashboard/settings">Settings</NavLink>,
    },
  ];

  // Return the location and menuItems so consuming components can render the
  // appropriate navigation and respond to current route information.
  return { location, menuItems };
};
