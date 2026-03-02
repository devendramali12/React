import React from "react";
import index from "./councellor.module.css";
const Councellor = () => {
  console.log(index);
  return (
    <>
      <h2 className={index.heading}>Councellor : Sudhir</h2>
      <p className={index.para}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
        eaque?
      </p>
    </>
  );
};

export default Councellor;
