import React from "react";

import styles from "./../Reg/Reg.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../../models/IUser";
import { useLoginUserMutation } from "../../store/api/userApi";

const DEFAULT_USER = {
  login: "",
  password: "",
};

const Login: React.FC = () => {
  const [user, setUser] = React.useState<Omit<IUser, "email">>(DEFAULT_USER);
  const navigate = useNavigate();

  const [loginUser] = useLoginUserMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user.login === "admin" && user.password === "admin") {
      await loginUser(user);
      navigate("/admin");
    } else {
      await loginUser(user);
      navigate("/");
    }
  };

  return (
    <main>
      <section className={styles.reg}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.title}>Добро пожаловать!</h2>
          <div className={styles.field}>
            <p>Логин</p>
            <input
              value={user?.login}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, login: e.target.value })}
              type="text"
              placeholder="Введите логин"
            />
          </div>
          <div className={styles.field}>
            <p>Пароль</p>
            <input
              value={user?.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, password: e.target.value })}
              type="password"
              minLength={5}
            />
            <h4>Пароль должен быть не менее 5 символов</h4>
          </div>
          <div className={styles.button}>
            <button type="submit">Войти</button>
          </div>
          <hr className={styles.divider} />
          <div className={styles.login}>
            <Link to={"/reg"}>Еще нет аккаунта?</Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
