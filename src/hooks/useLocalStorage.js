export default function useLocalStorage(key, defaultValue) {
  const stored = localStorage.getItem(key);
  const value = stored ? JSON.parse(stored) : defaultValue;

  const setValue = (val) => {
    localStorage.setItem(key, JSON.stringify(val));
  };

  return [value, setValue];
}
