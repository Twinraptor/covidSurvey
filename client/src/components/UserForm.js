import React, { useState } from "react";

import axios from "axios";

export default (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/user", {
        firstName,
        lastName,
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
      <input type='submit' />
    </form>
  );
};
