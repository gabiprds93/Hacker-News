// Common utility functions
export const getLocalStorage = (key: string) => {
  const storedString = localStorage.getItem(key);
  const stored = storedString ? JSON.parse(storedString) : undefined;

  return stored;
};
