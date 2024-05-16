const jwt = require("jsonwebtoken");
const conn = require("../../db");
const queries = require("./queries");
const bcrypt = require("bcrypt");
const salt = 10;

const addUser = (req, res) => {
  bcrypt.hash(req.body.password.toString(), salt, (error, hash) => {
    if (error) return res.json({ error: "Ошибка при хешировании пароля" });

    const values = [req.body.email, req.body.login, hash];

    conn.query(queries.addUser, [values], (error, result) => {
      if (error) return res.json({ error: "Ошибка при вставке данных в таблицу" });

      return res.json({ status: "Успех!" });
    });
  });
};

const loginUser = (req, res) => {
  conn.query(queries.loginUser, [req.body.login], (error, data) => {
    if (error) return res.json({ error: "Ошибка при попытке войти" });

    if (data.length > 0) {
      bcrypt.compare(req.body.password, data[0].password, (error, response) => {
        if (error) return res.json({ error: "Ошибка при сравнении паролей" });

        if (response) {
          const login = data[0].login;
          // secret key from .env
          const token = jwt.sign({ login }, "jwt-secret-key", { expiresIn: "1d" });
          res.cookie("token", token);
          return res.json(data);
        } else {
          return res.json({ status: "Неверный пароль" });
        }
      });
    } else {
      return res.json({ error: "Такого логина не существует" });
    }
  });
};

const logoutUser = (req, res) => {
  res.clearCookie("token");
  return res.json({ status: "Success" });
};

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ error: "Вы не авторизованы" });
  } else {
    jwt.verify(token, "jwt-secret-key", (error, decoded) => {
      if (error) {
        return res.json({ error: "Токен не валидный" });
      } else {
        req.login = decoded.login;
        next();
      }
    });
  }
};

const user = (req, res) => {
  return res.json({ status: "Success", login: req.login });
};

module.exports = {
  addUser,
  loginUser,
  logoutUser,
  verifyUser,
  user,
};
