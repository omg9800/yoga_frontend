import React, { useState, useEffect } from "react";
import { Link,useHistory } from "react-router-dom";
import {HashLoader} from 'react-spinners'
import "./login.css";


import url from "../../services/service";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);


  const history=useHistory()
  const verifyUser = (e) => {
    setFlag(true)
    fetch(`${url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"email":username,password}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("logged");
        console.log(data);
        setFlag(false)

        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("userId", JSON.stringify(data.user.id));
        localStorage.setItem("token", JSON.stringify(data.token));

        localStorage.setItem("loggedIn", true);
        history.push('/user')})
      .catch((e) => {
        console.log(e.message);
        console.log("failed");
      });

      e.preventDefault();

  };

  return (
    <div className="login-bg">
      {flag ?<div className="center"><HashLoader color="#36d7b7" loading={flag} speedMultiplier={1} /></div> :

      <div className="login-container">
        <h1>Login</h1>
        <ul className="list-container">
          <li className="item">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </li>
          <li className="item">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li className="submit-btn" onClick={verifyUser}>
            <button>Submit</button>
          </li>
        </ul>

        <span className="not-reg">Not Resistered?</span>
        <Link className="signup" to="/register">
          SignUp
        </Link>
      </div>
}
    </div>
  );
}

export default Login;
