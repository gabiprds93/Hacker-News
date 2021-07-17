// Common utility functions

/** Utilily for transform local storage from string to JSON format
 *
 * @param {string} key Key to get item
 * @returns Returns the parsed value
 */
export const getLocalStorage = (key: string) => {
  const storedString = localStorage.getItem(key);
  const stored = storedString ? JSON.parse(storedString) : undefined;

  return stored;
};
