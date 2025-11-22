import React, { useEffect, useState } from "react";
import { getEmployees } from "../api/employeeApi";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

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
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} ({emp.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
