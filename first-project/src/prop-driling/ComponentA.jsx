//rafce

import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  let instrument = "guitar";
  return (
    <>
      <h2>ComponentA is sending the data to ComponentB</h2>
      <ComponentB instrument={instrument} />
    </>
  );
};

export default ComponentA;
