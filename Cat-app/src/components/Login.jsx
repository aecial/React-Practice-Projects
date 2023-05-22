import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  let name = "Teddy";
  const [newEmail, setNewEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (newEmail === "kledted23@gmail.com" && newPass === "pass1234") {
      alert(`Access Granted! ${name}`);
    } else {
      alert("Access Denied!");
      navigate("/denied");
    }
  }
  return (
    <>
      <h2>Login Page</h2>
      <form className="form-box" onSubmit={handleSubmit}>
        <label htmlFor="email-inp">Input your Email: </label>
        <input
          id="email-inp"
          placeholder="kledted23@gmail.com"
          value={newEmail}
          type="email"
          onChange={(e) => setNewEmail(e.target.value)}
          required
        ></input>
        <label htmlFor="pass-inp">Input your password: </label>
        <input
          id="pass-inp"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          type="password"
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
