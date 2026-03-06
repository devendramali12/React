import React from "react";
import { useContext } from "react";
import { ContextApi } from "./Context2";

const Employee = () => {
  let data = useContext(ContextApi);
  console.log(data);

  let { company, employee } = data;

  return (
    <>
      <h1>Employee</h1>
      <h2>Company Name : {company}</h2>
      <h2>No Of Employee : {employee}</h2>
    </>
  );
};

export default Employee;
