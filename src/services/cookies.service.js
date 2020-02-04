export const getCookie = key => {
  const cookies = document.cookie;

  const cookie = cookies[key];

  return cookie ? cookie : false;
};

export const setCookie = (key, value) => (document.cookie[key] = value);

export const destroyCookie = key => delete document.cookie[key];

export const clearCookies = () => (document.cookie = {});

export default {
  getCookie,
  setCookie,
  destroyCookie,
  clearCookies
};
