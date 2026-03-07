import React from "react";

const Child = (props) => {
  console.log(props); // {setMessage}
  let { setMessage } = props;
  return (
    <div>
      <h3>Data flow from child to parent Component is possible but indirectly using a callback func</h3>
      <button onClick={() => setMessage("Good Night")}>Change Message</button>
    </div>
  );
};

export default Child;
