import React, { createContext } from "react";
import { useContext } from "react";

export let ContextApi = createContext();

const Context2 = (props) => {
  let company = "xyz";
  let employee = 120;

  return (
    <>
      <ContextApi.Provider value={{ company, employee }}>
        {props.children}
      </ContextApi.Provider>
    </>
  );
};

export default Context2;
