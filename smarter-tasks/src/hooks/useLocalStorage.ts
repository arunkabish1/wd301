import { useEffect, useState } from "react";

const getStoredValue = <T>(key: string, defaultValue: T): T => {
  const ItemsStored = localStorage.getItem(key);
  if (ItemsStored) {
    return JSON.parse(ItemsStored);
  }
  return defaultValue;
};

export const useLocalStorage = <T>(
  key: string,

  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState(() => {
    return getStoredValue(key, defaultValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};