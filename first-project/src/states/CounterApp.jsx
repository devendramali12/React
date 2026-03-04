import { useState } from "react";

const CounterApp = () => {
  let [count, setCount] = useState(0);
  console.log("Component gets re-rendered on update of state");

  let incr = () => setCount(count + 1);

  let decr = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let reset = () => setCount(0);

  return (
    <>
      <div>CounterApp</div>
      <h3>Count : {count}</h3>
      <button onClick={incr}>Increment</button> <br />
      <button onClick={decr}>Decrement</button> <br />
      <button onClick={reset}>Reset</button>
      <br />
    </>
  );
};

export default CounterApp;
