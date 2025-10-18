// Import the Layout component from antd (provides Layout, Content, etc.)
import { Layout } from 'antd';
// Import QueryClient and provider from react-query for server state management
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Import routing primitives from react-router-dom for client-side routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import the top navigation bar component
import Navbar from "./components/Navbar";
// Import page components used by the route table
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";
// Destructure Content from the Layout object provided by antd
const { Content } = Layout;

// Create a single QueryClient instance for the app (react-query)
const queryClient = new QueryClient();

// Root App component - sets up providers and routing root
const App = () => {
  // Simple debug log to show when App renders
  console.log('App component rendering');
  
  // Return the provider and router wrappers for the app
  return (
    // Provide react-query context to the component tree
    <QueryClientProvider client={queryClient}>
      {/* Wrap the app in a BrowserRouter for client-side navigation */}
      <BrowserRouter>
        {/* Render the main app content (layout + routes) */}
        <AppContent />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

// AppContent component - contains layout and route definitions
const AppContent = () => {
  // Debug log to show when AppContent renders
  console.log('AppContent component rendering');
  
  return (
    // Use antd Layout to give the page a consistent structure
    <Layout style={{ minHeight: '100vh' }}>
      {/* Render the site's navigation bar */}
      <Navbar />
      {/* The main content area supplied by antd's Layout */}
      <Content>
        {/* Routes defines the application's route table */}
        <Routes>
          {/* Static Routes */}
          {/* Home route - renders HomePage at root path */}
          <Route path="/" element={<HomePage />} />
          {/* About route - renders AboutPage at /about */}
          <Route path="/about" element={<AboutPage />} />
          
          {/* Dashboard with Nested Routes */}
          {/* Dashboard base route - DashboardPage renders and may host nested routes */}
          <Route path="/dashboard" element={<DashboardPage />}>
            {/* Nested profile route under /dashboard/profile */}
            <Route path="profile" element={<h1 style={{margin:"20px", fontSize:"28px"}}>Profile Page</h1>} />
            {/* Nested settings route under /dashboard/settings */}
            <Route path="settings" element={<h1 style={{margin:"20px", fontSize:"28px"}}>Settings Page</h1>} />
          </Route>

        </Routes>
      </Content>
    </Layout>
  );
};

// Export the App component as the default export from this module
export default App;