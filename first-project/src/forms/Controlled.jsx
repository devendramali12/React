import React from "react";
import { useState } from "react";

const Controlled = () => {
  //? 1. Initalize the state

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  //? 3. State Updation (onChange)
  let emailChange = (e) => {
    console.log(e.target); //? Input field in which the user types
    setEmail(e.target.value);
  };
  let passChange = (e) => {
    console.log(e.target);
    setPassword(e.target.value);
  };

  return (
    //? 2. Pass the value attribute in the input fields
    <>
      <h2>Controlled Form</h2>
      <form action="">
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={emailChange}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter password"
          value={password}
          onChange={passChange}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Controlled;

let e = {
  target: {
    value: "Akshat@gmail.com",
  },
};
