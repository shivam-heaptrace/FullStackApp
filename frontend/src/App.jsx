import React, { useState, useEffect } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div className="" style={{ display: "flex", flexDirection: "row" }}>
          <Login onLogin={handleLogin} />
          <Register />
        </div>
      ) : (
        <>
          <button onClick={handleLogout}>Logout</button>
          <EmployeeList />
        </>
      )}
    </div>
  );
}

export default App;
