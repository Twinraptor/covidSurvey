import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/UserForm";
import UserForm from "../components/UserForm";
// import UserList from "../components/UserList";
import SignInForm from "../components/SignInForm";

export default () => {
  // const [users, setUsers] = useState([]);
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   axios.get("http://localhost:8000/api/users").then((res) => {
  //     setUsers(res.data);
  //     setLoaded(true);
  //   });
  // }, []);

  return (
    <div>
      <UserForm />
      <SignInForm />
      {/* <hr />
      {loaded && <UserList users={users} />} */}
    </div>
  );
};
