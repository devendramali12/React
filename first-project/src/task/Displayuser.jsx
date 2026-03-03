import React from "react";
import users from "./data.json";

const Displayuser = () => {
  console.log(users);

  return (
    <div className="container">
      {users.map((value, index) => {
        console.log(value);
        return (
          <div className="usercard" key={value.id}>
            <h3>{value.login + index}</h3>
            <img src={value.avatar_url} className="image" />
          </div>
        );
      })}
    </div>
  );
};

export default Displayuser;
