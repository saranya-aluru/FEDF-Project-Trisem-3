import React, { useState } from "react";

function Login({ onLogin, goToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (!user) {
      alert("Invalid Credentials");
      return;
    }

    onLogin(user);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Healthcare Portal</h1>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p>
          New User?{" "}
          <span
            onClick={goToRegister}
            style={{
              color: "blue",
              cursor: "pointer",
            }}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;