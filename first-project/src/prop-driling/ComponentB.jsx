import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = (props) => {
  console.log(props);
  let { instrument } = props;
  return (
    <>
      <h2>ComponentB is sending the data to ComponentC</h2>
      <ComponentC instrument={instrument} />
    </>
  );
};

export default ComponentB;
