import React from "react";

import styles from "./Reg.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAddUserMutation } from "../../store/api/userApi";
import { IUser } from "../../models/IUser";

const DEFAULT_USER = {
  email: "",
  login: "",
  password: "",
};

const Reg: React.FC = () => {
  const [user, setUser] = React.useState<IUser>(DEFAULT_USER);
  const navigate = useNavigate();
  const [addUser] = useAddUserMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser(user).then(() => navigate("/login"));
  };

  return (
    <main>
      <section className={styles.reg}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.title}>Создать аккаунт</h2>
          <div className={styles.field}>
            <p>Email</p>
            <input
              value={user?.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, email: e.target.value })}
              type="email"
              placeholder="Введите вашу почту"
            />
          </div>
          <div className={styles.field}>
            <p>Логин</p>
            <input
              value={user?.login}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, login: e.target.value })}
              type="text"
              placeholder="Придумайте логин"
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
            <button type="submit">Создать аккаунт</button>
          </div>
          <hr className={styles.divider} />
          <div className={styles.login}>
            <Link to={"/login"}>Уже есть аккаунт?</Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Reg;
