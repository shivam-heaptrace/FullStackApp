import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

const registerEmployee = (name, email, password) =>
  axios.post(`${API_URL}/register/`, { name, email, password });

const loginEmployee = (email, password) =>
  axios.post(`${API_URL}/login/`, { email, password });

const getEmployees = () => axios.get(`${API_URL}/`);

export { registerEmployee, loginEmployee, getEmployees };
