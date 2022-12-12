import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { HashLoader } from "react-spinners";
import "./register.css";
import "../Login/login.css";

import { saveUser } from "../../services/user";

function Register() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    phone: "",
    password: "",
  });

  const [flag, setFlag] = useState(false);

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(user);
  };

  const addUser = (e) => {
    console.log("registering...");
    setFlag(true)

    saveUser(user)
      .then(() => {
        setFlag(false)
        alert("User has been Registered!");
        history.push("/login");
      })
      .catch((e) => {
        console.log(e.message);
        alert(e.message);
      });

    e.preventDefault();
  };

  return (
    <div className="login-bg">
      {flag ?<div className="center"><HashLoader color="#36d7b7" loading={flag} speedMultiplier={1} /></div> :
      <div className="login-container">
        <h1>Register</h1>
        <ul className="list-container">
          <li className="item">
            <input
              type="text"
              name="firstName"
              value={user.firstName}
              placeholder="First Name"
              onChange={handleChange}
            />
          </li>
          <li className="item">
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              placeholder="Last Name"
              onChange={handleChange}
            />
          </li>
          <li className="item">
            <input
              type="number"
              name="age"
              value={user.age}
              placeholder="Age"
              onChange={handleChange}
            />
          </li>
          <li className="item">
            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="Email"
              onChange={handleChange}
            />
          </li>
          <li className="item">
            <input
              type="text"
              name="phone"
              value={user.phone}
              placeholder="Phone"
              onChange={handleChange}
            />
          </li>
          <li className="item">
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Password"
              onChange={handleChange}
            />
          </li>
        </ul>
        <div className="item">
          <button className="signup-btn" onClick={addUser}>
            Sign Up
          </button>
        </div>
        <span className="al-reg">Already Resistered?</span>
        <Link className="signin" to="/profile">
          Sign In
        </Link>
      </div>
}
    </div>
  );
}

export default Register;
