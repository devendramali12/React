import CounterHoc from "./CounterHoc";

const Counter1 = ({ count, increment }) => {
  return (
    <>
      <h2>Click Counter</h2>
      <h3>Count : {count}</h3>
      <button onClick={increment}>Click Me</button>
    </>
  );
};
export default CounterHoc(Counter1);
