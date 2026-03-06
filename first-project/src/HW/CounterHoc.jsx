import { useState } from "react";

const CounterHoc = (WrappedComponent) => {
  return function NewComponent() {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount((prev) => prev + 1);
    };
    return <WrappedComponent count={count} increment={increment} />;
  };
};

export default CounterHoc;
