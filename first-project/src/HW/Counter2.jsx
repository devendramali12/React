import CounterHoc from "./CounterHoc";

const Counter2 = ({ count, increment }) => {
  return (
    <>
      <h2>Hover Counter</h2>
      <h3>Count : {count}</h3>
      <h3 onMouseOver={increment}>Hover Over Me</h3>
    </>
  );
};

export default CounterHoc(Counter2);
