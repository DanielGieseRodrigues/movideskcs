import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Auth from "../auth";
import "./login.css";
import logoMovidesk from "../static/logo-default-no-background.png";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const submitLogin = history => {
    Auth.login(user, pass, () => {
      history.push("/app");
    });
  };

  const ButtonLogin = withRouter(({ history }) => {
    return (
      <button
        onClick={event => {
          event.preventDefault();
          submitLogin(history);
        }}
      >
        Entrar
      </button>
    );
  });

  return (
    <div className="login-container">
      <aside className="aside-login-container">
        <div className="img-aside-login-container">
          <img src={logoMovidesk} alt="Movidesk" />
        </div>
        <div className="form-login-submit">
          <input
            type="text"
            name="user"
            id="user"
            placeholder="Usuário"
            onChange={event => {
              setUser(event.target.value);
            }}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            onChange={event => {
              setPass(event.target.value);
            }}
          />
          <div className="button-container">
            <ButtonLogin />
          </div>
        </div>
      </aside>
      <main className="main-login-container" />
    </div>
  );
}

export default Login;
