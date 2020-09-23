import React from "react";

function UserList(props) {
  return (
    <div>
      {props.users.map((user, index) => {
        return (
          <p key={index}>
            {user.firstName}, {user.lastName}
          </p>
        );
      })}
    </div>
  );
}

export default UserList;
