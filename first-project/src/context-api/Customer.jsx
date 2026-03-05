import React from "react";
import { useContext } from "react";
import { Newcontext } from "./Context1";

const Customer = () => {
  let data = useContext(Newcontext);
  console.log(data);

  return (
    <>
      <h2>Customer :- {data}</h2>
    </>
  );
};

export default Customer;
