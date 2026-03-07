import { useReducer } from "react";

//! InitialState => Initial data to be stored

let InitialState = {
  count: 0,
};

//! reducer(state,action) => returns a new state

let reducer = (state, action) => {
  //state => {count : 0}
  //action => {type : "increment" , value : 1}
  switch (action.type) {
    case "increment":
      return { count: state.count + action.value };

    case "decrement":
      return { count: state.count - action.value };

    case "reset":
      return { count: 0 };
  }
};

const Counter = () => {
  // 1.useReducer is an alternative to useState hook.
  // 2.useReducer is usually preferable as an alternative to useState,
  //  when you have complex state logic.

  let [state, dispatch] = useReducer(reducer, initialState);

  console.log(state); //{count: 0}

  return (
    <>
      <h2>Counter using useReducer()</h2>
      <h3>Count : {state.count}</h3>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment by 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement by 1
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement by 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default Counter;
