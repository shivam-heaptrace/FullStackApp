import React, { useRef, useState } from "react";
import { loginEmployee } from "../api/employeeApi";
import "../css/style.css";

const Login = ({ onLogin, status, setStatus }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginEmployee(email, password);
      setStatus({ message: res.data.detail, success: true });
      onLogin();
    } catch (err) {
      setStatus({
        message: err.response?.data?.detail || "Error",
        success: false,
      });
    }
  };

  return (
    <div style={{ margin: "50px" }}>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <form onSubmit={handleSubmit} className="loginForm radius">
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="radius">
          Login
        </button>
      </form>
      {status.message && (
        <p className={status.success ? "success" : "failed"}>
          {status.message}
        </p>
      )}
    </div>
  );
};

export default Login;
