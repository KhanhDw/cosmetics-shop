import React from 'react';

// Higher-Order Component to handle loading states
const withLoading = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P & { loading?: boolean }) => {
    const { loading, ...otherProps } = props;

    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      );
    }

    return <WrappedComponent {...otherProps as P} />;
  };
};

export default withLoading;