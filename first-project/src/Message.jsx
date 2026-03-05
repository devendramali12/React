import { useState } from "react";

const Message = () => {
  // Boolean state
  let [show, setShow] = useState(true);

  let changeMessage = () => {
    setShow(!show); // toggle true/false
  };

  return (
    <>
      {show && <h2>Message : Helooo</h2>}

      <button onClick={changeMessage}>
        {show ? "Hide Message" : "Show Message"}
      </button>
    </>
  );
};

export default Message;
