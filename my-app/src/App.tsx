import { Layout, Menu } from 'antd';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined, DashboardOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

// Sadə Navbar komponenti
const Navbar = () => {
  const location = useLocation();
  const items = [
    { key: '/', icon: <HomeOutlined />, label: <NavLink to="/">Home</NavLink> },
    { key: '/about', icon: <InfoCircleOutlined />, label: <NavLink to="/about">About</NavLink> },
    { key: '/dashboard', icon: <DashboardOutlined />, label: <NavLink to="/dashboard">Dashboard</NavLink> },
  ];

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]} items={items} />
    </Header>
  );
};

// Sadə səhifələr
const HomePage = () => <h1 style={{ margin: 20 }}>Home Page</h1>;
const AboutPage = () => <h1 style={{ margin: 20 }}>About Page</h1>;
const DashboardPage = () => <h1 style={{ margin: 20 }}>Dashboard Page</h1>;

// App komponenti
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
