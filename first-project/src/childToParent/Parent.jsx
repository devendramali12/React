import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  let [message, setMessage] = useState("Good morning!!");

  return (
    <div>
      <h2>Parent Message - {message}</h2>
      <Child setMessage={setMessage} />
    </div>
  );
};

export default Parent;
