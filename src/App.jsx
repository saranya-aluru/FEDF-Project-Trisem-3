import React, {
  useState,
  useEffect,
} from "react";

import Login from "./Login";
import Register from "./Register";
import DoctorDashboard from "./DoctorDashboard";
import PatientDashboard from "./PatientDashboard";

function App() {
  const [currentPage, setCurrentPage] =
    useState("login");

  const [currentUser, setCurrentUser] =
    useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (savedUser) {
      setCurrentUser(savedUser);
    }
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);

    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );
  };

  const handleLogout = () => {
    localStorage.removeItem(
      "currentUser"
    );

    setCurrentUser(null);

    setCurrentPage("login");
  };

  if (currentUser) {
    if (
      currentUser.role === "doctor"
    ) {
      return (
        <DoctorDashboard
          user={currentUser}
          onLogout={handleLogout}
        />
      );
    }

    return (
      <PatientDashboard
        user={currentUser}
        onLogout={handleLogout}
      />
    );
  }

  return (
    <>
      {currentPage === "login" ? (
        <Login
          onLogin={handleLogin}
          goToRegister={() =>
            setCurrentPage(
              "register"
            )
          }
        />
      ) : (
        <Register
          goToLogin={() =>
            setCurrentPage("login")
          }
        />
      )}
    </>
  );
}

export default App;