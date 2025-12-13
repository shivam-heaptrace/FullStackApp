import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Home({ onLogin }) {
  const initMessage = {
    message: "",
    success: null,
  };

  const [ele, setEle] = useState(true);
  const [status, setStatus] = useState(initMessage);

  const props = { status, setStatus };

  return (
    <>
      <button
        onClick={(e) => {
          setEle(!ele);
          setStatus(initMessage);
        }}
        style={{ display: "block", marginLeft: "auto", width: "80px" }}
      >
        {ele ? "Register" : "Login"}
      </button>
      <div
        className="home"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {ele ? <Login onLogin={onLogin} {...props} /> : <Register {...props} />}
      </div>
    </>
  );
}
