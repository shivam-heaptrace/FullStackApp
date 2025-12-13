import React, { useEffect, useState } from "react";
import { getEmployees } from "../api/employeeApi";
import "../css/style.css";

const EmployeeList = ({ handleLogout }) => {
  const [employees, setEmployees] = useState([]);

  let thtd = {
    padding: "8px",
    textAlign: "left",
    border: "1px solid black",
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await getEmployees();
      setEmployees(res.data);
    };
    fetchEmployees();
  }, []);

  return (
    <>
      <button
        onClick={handleLogout}
        style={{ display: "block", marginLeft: "auto" }}
      >
        Logout
      </button>
      <div
        className="home"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Employee List</h2>
        <table>
          <thead style={{ background: "yellow" }}>
            <tr>
              <th style={thtd}>Full Name</th>
              <th style={thtd}>Email ID</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td style={thtd}>{emp.name}</td>
                <td style={thtd}>{emp.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeList;
