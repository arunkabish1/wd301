import { useState, useEffect, Dispatch, SetStateAction } from "react";

const getStoredValue = <T>(key: string, defaultValue: T): T => {
  try {
    const savedItem = localStorage.getItem(key);
    if (savedItem) {
      return JSON.parse(savedItem) as T;
    }
  } catch (error) {
    console.error("Error parsing JSON from localStorage:", error);
  }
  return defaultValue;
};

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState(() => {
    return getStoredValue(key, defaultValue);
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error stringifying value to JSON:", error);
    }
  }, [key, value]);

  return [value, setValue];
};
