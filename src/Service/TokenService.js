//Get AccessToken
const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.accessToken;
};

//Get User
const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

//Set User
const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

//Remove User
const removeUser = () => {
  localStorage.removeItem("user");
};

const TokenService = {
  getLocalAccessToken,
  getUser,
  setUser,
  removeUser,
};

export default TokenService;
