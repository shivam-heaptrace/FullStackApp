import React, { useState } from "react";
import { registerEmployee } from "../api/employeeApi";
import "../css/style.css";

const Register = ({ status, setStatus }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerEmployee(name, email, password);
      setStatus({ message: res.data.detail, success: true });
    } catch (err) {
      setStatus({
        message: err.response?.data?.detail || "Error",
        success: false,
      });
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit">Register</button>
      </form>
      {status.message && (
        <p className={status.success ? "success" : "failed"}>
          {status.message}
        </p>
      )}
    </div>
  );
};

export default Register;
