import React, { useEffect, useState } from "react";
import { getEmployees } from "../api/employeeApi";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  let thtd = {
    border: "1px solid black",
    padding: "8px",
    textAlign: "left",
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await getEmployees();
      setEmployees(res.data);
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <table
        style={{
          border: "1px solid black",
          borderCollapse: "collapse",
          padding: "20px",
        }}
      >
        <tbody>
          <tr>
            <th style={thtd}>Full Name</th>
            <th style={thtd}>Email ID</th>
          </tr>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td style={thtd}>{emp.name}</td>
              <td style={thtd}>{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
