import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Home({ onLogin }) {
  const [ele, setEle] = useState(true);

  return (
    <>
      <button
        onClick={(e) => setEle(!ele)}
        style={{ display: "block", marginLeft: "auto", width: "80px" }}
      >
        {ele ? "Register" : "Login"}
      </button>
      <div className="home" style={{ display: "flex", justifyContent: "center" }}>
        {ele ? <Login onLogin={onLogin} /> : <Register />}
      </div>
    </>
  );
}
