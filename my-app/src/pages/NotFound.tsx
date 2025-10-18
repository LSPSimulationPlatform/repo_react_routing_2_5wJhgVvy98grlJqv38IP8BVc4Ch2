// useLocation provides the current route information from react-router
import { useLocation } from "react-router-dom";
// useEffect is used to run a side-effect (logging) when the component mounts or location changes
import { useEffect } from "react";

// NotFound component shown when no route matches (404)
const NotFound = () => {
  // Read the current location so we can show/log the attempted pathname
  const location = useLocation();

  // Log a 404 error to the console whenever the pathname changes
  // This is helpful for debugging or tracking unexpected navigation in development
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Render a simple centered 404 page using Tailwind utility classes
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        {/* Large 404 heading */}
        <h1 className="text-4xl font-bold mb-4">404</h1>
        {/* Short friendly message */}
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        {/* Simple link back to the homepage */}
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
