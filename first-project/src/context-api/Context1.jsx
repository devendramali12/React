//? 1. Create a Context .
//? 2. Wrap the consumer component within the provider
//? 3. Send the data using 'value' prop.

import { createContext } from "react";
import Customer from "./Customer";

export let Newcontext = createContext()

import React from "react";

const Context1 = () => {
  return (
    <>
      <Newcontext.Provider value="I Have Come From Context">
        <Customer></Customer>
      </Newcontext.Provider>
    </>
  );
};

export default Context1;
