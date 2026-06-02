import React, { useState } from "react";

function Register({ goToLogin }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
  });

  const registerUser = () => {
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(
      (u) => u.email === user.email
    );

    if (exists) {
      alert("Email already exists");
      return;
    }

    const newUser = {
      id: Date.now(),
      ...user,
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Registration Successful");

    goToLogin();
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1>Create Account</h1>

        <input
          placeholder="Name"
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value,
            })
          }
        />

        <select
          onChange={(e) =>
            setUser({
              ...user,
              role: e.target.value,
            })
          }
        >
          <option value="patient">
            Patient
          </option>

          <option value="doctor">
            Doctor
          </option>
        </select>

        <button onClick={registerUser}>
          Register
        </button>

      </div>
    </div>
  );
}

export default Register;