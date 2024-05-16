const addUser = "INSERT INTO users (`email`, `login`, `password`) VALUES (?)";
const loginUser = "SELECT * FROM users WHERE login = ?";

module.exports = {
  addUser,
  loginUser,
};
