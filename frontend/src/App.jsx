import React, { useState, useEffect } from "react";
import Home from "./components/Home";
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
        <Home onLogin={handleLogin} />
      ) : (
        <EmployeeList handleLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
