import React, { useState } from "react";
import axios from "axios";

function SignInForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:8000/api/user", {
        email,
        password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h1>Existing User Sign-in</h1>
        <p>
          <label>Email</label>
          <br></br>
          <input type='text' onChange={(e) => setEmail(e.target.value)} />
        </p>
        <p>
          <label>Password</label>
          <br></br>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <input type='submit' />
      </form>
    </div>
  );
}

export default SignInForm;
