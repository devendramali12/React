import { useEffect, useState } from "react";
import axios from "axios";

//! axios => Promise based library
//  Use   => To make use of http methods.
//  command => npm i axios

const FetchUsers = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users") //returns a promise
      .then((response) => {
        console.log(response); // {data : [{..},{..},{..}..]}
        console.log(response.data); //[{..},{..},{..}..]
        setUsers(response.data); //fetched data stored inside the state
      });
  }, []);

  return (
    <>
      <h2>Users</h2>
      {users.map((value, index) => {
        console.log(value); //{login : "dgf" , id : 1 , avatar_url : "dfgfv"}
        return (
          <div key={value.id}>
            <h2>{value.login}</h2>
            <img src={value.avatar_url} />
          </div>
        );
      })}
    </>
  );
};

export default FetchUsers;
