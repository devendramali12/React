import React from "react";
import { useRef } from "react";

const Uncontrolled = () => {
  let emailRef = useRef();

  let passRef = useRef();
  //! e => Synthetic Event
  let handleSubmit = (e) => {
    e.preventDefault();
    let a = emailRef.current.value;
    let b = passRef.current.value;
    console.log({ email: a, password: b });
  };

  return (
    <>
      <h2>Uncontrolled Form</h2> <br />
      <form>
        <input type="email" placeholder="Enter Email" ref={emailRef} /> <br />{" "}
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          ref={passRef}
        />{" "}
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Uncontrolled;

let emailRef = {
  current: {
    value: "rakesh@gail.com",
  },
};
