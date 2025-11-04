import React from 'react';
import { useAppState } from '@/context/AppContext';

// Higher-Order Component to check authentication
// Redirects to login if user is not authenticated
const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P) => {
    const { state } = useAppState();
    
    if (!state.auth.isAuthenticated) {
      // Redirect to login page
      React.useEffect(() => {
        window.location.href = '/login';
      }, []);
      
      // Render nothing or a loading indicator while redirecting
      return <div>Redirecting to login...</div>;
    }
    
    // If authenticated, render the wrapped component
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;