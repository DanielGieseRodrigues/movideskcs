import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Auth from "../auth";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const ButtonLogin = withRouter(({ history }) => {
    return (
      <button
        onClick={() => {
          Auth.login(user, pass, () => {
            history.push("/app");
          });
        }}
      >
        Login
      </button>
    );
  });

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        name="user"
        id="user"
        onChange={event => {
          setUser(event.target.value);
        }}
      />
      <input
        type="password"
        name="password"
        id="password"
        onChange={event => {
          setPass(event.target.value);
        }}
      />
      <ButtonLogin />
    </div>
  );
}

export default Login;
