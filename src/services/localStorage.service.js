export const getKey = key => {
  const data = localStorage.getItem(key);
  return data ? data : false;
};

export const setKey = (key, value) => localStorage.setItem(key, value);

export const destroyKey = key => localStorage.removeItem(key);

export const clearKeys = () => localStorage.clear();

export default {
  getKey,
  setKey,
  destroyKey,
  clearKeys
};
