import React, { useEffect, useState } from "react";
import axios from "axios";

function Detail(props) {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/" + props.id)
      .then((res) => setUser(res.data));
  }, []);
  return (
    <div>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
    </div>
  );
}

export default Detail;
