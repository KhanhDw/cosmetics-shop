import { useEffect, useRef } from 'react';

// Performance monitoring hook to track component render times
export const usePerformanceMonitor = (componentName: string) => {
  const renderStartTime = useRef(0);
  const renderEndTime = useRef(0);

  // Track render start
  if (typeof window !== 'undefined') {
    renderStartTime.current = performance.now();
  }

  useEffect(() => {
    // Track render end
    if (typeof window !== 'undefined') {
      renderEndTime.current = performance.now();
      const renderTime = renderEndTime.current - renderStartTime.current;

      // Log performance metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.groupCollapsed(`⏱️ Performance: ${componentName}`);
        console.log(`Render time: ${renderTime.toFixed(2)}ms`);
        console.log(`Memory usage: ${(performance.memory?.usedJSHeapSize / 1048576).toFixed(2)} MB`);
        console.groupEnd();
      }

      // In production, you might send this data to an analytics service
      // Example: reportToAnalyticsService(componentName, renderTime);
    }
  });

  // Track component mount
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log(` mounting: ${componentName}`);
    }

    return () => {
      if (process.env.NODE_ENV === 'development') {
        console.log(` unmounting: ${componentName}`);
      }
    };
  }, [componentName]);
};

// Performance observer hook to track long tasks
export const useLongTaskObserver = () => {
  useEffect(() => {
    if ('performance' in window && 'addEventListener' in window) {
      // Observe long tasks that take more than 50ms
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`⚠️ Long Task detected: ${entry.duration.toFixed(2)}ms`);
          }
          // In production, you might send this to your monitoring service
        });
      });

      try {
        observer.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // Some browsers may not support longtask
        console.info('Long task monitoring not supported in this browser');
      }

      return () => {
        observer.disconnect();
      };
    }
  }, []);
};

// Hook to measure and report component hydration time
export const useHydrationMeasurement = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Measure Time to Interactive (TTI) 
      const measureTTI = () => {
        if (performance.getEntriesByType('navigation').length > 0) {
          const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const tti = navigationEntry.domInteractive;
          console.log(`Time to Interactive: ${tti} ms`);
        }
      };

      // Run the measurement after a brief delay to ensure DOM is ready
      setTimeout(measureTTI, 1000);
    }
  }, []);
};