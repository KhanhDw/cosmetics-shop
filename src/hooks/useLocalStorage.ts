import { useState, useEffect } from 'react';

export const useLocalStorage = <T,>(key: string, initialValue: T) => {
  // Get from local storage or use initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // Update local storage when state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      // Error handling for localStorage set operation
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
};