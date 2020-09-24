import React, { useState } from "react";

import axios from "axios";

export default (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/user", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h1>New User Registration</h1>
      <p>
        <label>First Name</label>
        <br></br>
        <input type='test' onChange={(e) => setFirstName(e.target.value)} />
      </p>
      <p>
        <label>Last Name</label>
        <br></br>
        <input type='test' onChange={(e) => setLastName(e.target.value)} />
      </p>
      <p>
        <label>Email</label>
        <br></br>
        <input type='test' onChange={(e) => setEmail(e.target.value)} />
      </p>
      <p>
        <label>Password</label>
        <br></br>
        <input type='password' onChange={(e) => setPassword(e.target.value)} />
      </p>
      <p>
        <label>Confirm Password</label>
        <br></br>
        <input
          type='password'
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </p>
      <input type='submit' />
    </form>
  );
};
