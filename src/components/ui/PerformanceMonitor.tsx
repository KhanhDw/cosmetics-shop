import React, { useEffect } from 'react';

// Performance monitoring component that can be added to track page-level metrics
const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Track page load performance
    if ('performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0];
      if (perfData) {
        const {
          loadEventEnd,
          domContentLoadedEventEnd,
          responseStart,
          responseEnd,
          fetchStart,
          connectStart,
          connectEnd,
          requestStart,
          domInteractive,
          domContentLoadedEventStart,
          loadEventStart
        } = perfData as PerformanceNavigationTiming;

        if (process.env.NODE_ENV === 'development') {
          console.group('🚀 Performance Metrics');
          console.log(`Page Load Time: ${loadEventEnd - fetchStart}ms`);
          console.log(`DOM Content Loaded: ${domContentLoadedEventEnd}ms`);
          console.log(`DOM Interactive: ${domInteractive}ms`);
          console.log(`Time to First Byte: ${responseStart - fetchStart}ms`);
          console.log(`Response Time: ${responseEnd - responseStart}ms`);
          console.log(`Connection Time: ${connectEnd - connectStart}ms`);
          console.log(`Request Time: ${responseEnd - requestStart}ms`);
          console.groupEnd();
        }
      }

      // Track resource loading
      const resourceEntries = performance.getEntriesByType('resource');
      if (process.env.NODE_ENV === 'development') {
        console.log(`Resources loaded: ${resourceEntries.length}`);
      }
    }

    // Track memory usage if available
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory && process.env.NODE_ENV === 'development') {
        console.log(`Memory Usage: ${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`);
        console.log(`Memory Limit: ${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`);
        console.log(`Total Memory: ${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`);
      }
    }
  }, []);

  return null;
};

export default PerformanceMonitor;