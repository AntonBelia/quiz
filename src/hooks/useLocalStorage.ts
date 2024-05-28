import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log('Error reading localStorage key “' + key + '”: ', error);
      return initialValue;
    }
  });

  useEffect(() => {
    const item = window.localStorage.getItem(key);
    if (!item) {
      try {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        setStoredValue(initialValue);
      } catch (error) {
        console.log('Error setting localStorage key “' + key + '”: ', error);
      }
    }
  }, [key, initialValue]);

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log('Error setting localStorage key “' + key + '”: ', error);
    }
  };

  return [storedValue, setValue];
}
