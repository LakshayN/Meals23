export const fetchUser = () => {
  const isPresent = localStorage.getItem("user") !== "undefined";
  const userInfo = isPresent ? JSON.parse(localStorage.getItem("user")) : null;

  return userInfo;
};
