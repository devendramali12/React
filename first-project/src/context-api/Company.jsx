import React from "react";
import { ContextApi } from "./Context2";

import { useContext } from "react";
const Company = () => {
  let data = useContext(ContextApi);
  console.log(data); // {company : "xyz", employee : 120}

  let { company, employee } = data;
  return (
    <>
      <h1>Company</h1>
      <h2>Company Name : {company}</h2>
      <h2>No of Employee : {employee}</h2>
    </>
  );
};

export default Company;
