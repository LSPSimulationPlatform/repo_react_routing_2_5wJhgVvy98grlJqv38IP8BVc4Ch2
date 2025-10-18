import { Layout, Menu } from 'antd';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined, DashboardOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';

const { Header, Content } = Layout;

// Simple page components
const HomePage = () => <div style={{ margin: 20 }}><h1>Home Page</h1></div>;
const AboutPage = () => <div style={{ margin: 20 }}><h1>About Page</h1></div>;
const DashboardPage = () => <div style={{ margin: 20 }}><h1>Dashboard Page</h1></div>;

// Navbar without useLocation hook
const Navbar = () => {
  const [currentPath, setCurrentPath] = useState('/');
  
  // Update current path when location changes
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, [window.location.pathname]);

  const menuItems = [
    { 
      key: '/', 
      icon: <HomeOutlined />, 
      label: <NavLink to="/" onClick={() => setCurrentPath('/')}>Home</NavLink> 
    },
    { 
      key: '/about', 
      icon: <InfoCircleOutlined />, 
      label: <NavLink to="/about" onClick={() => setCurrentPath('/about')}>About</NavLink> 
    },
    { 
      key: '/dashboard', 
      icon: <DashboardOutlined />, 
      label: <NavLink to="/dashboard" onClick={() => setCurrentPath('/dashboard')}>Dashboard</NavLink> 
    },
  ];

  return (
    <Header>
      <Menu 
        theme="dark" 
        mode="horizontal" 
        selectedKeys={[currentPath]} 
        items={menuItems} 
      />
    </Header>
  );
};

// Main App component
const App = () => {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Navbar />
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
};

export default App;