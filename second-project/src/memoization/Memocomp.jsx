import { useState, useMemo } from "react";

const Memocomp = () => {
  let [count, setCount] = useState(0);
  let [number, setNumber] = useState(0);

  let incrCount = () => setCount(count + 1);
  let incrNum = () => setNumber(number + 1);

  //! useMemo() is used to memoize a value.
  //   let isEven = () => {
  //     let i = 0;
  //     while (i < 2000000000) {
  //       i++;
  //     }
  //     return count % 2 == 0;
  //   };

  let isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return count % 2 == 0;
  }, [count]);
  return (
    <div>
      <button onClick={incrCount}> Count - {count}</button>
      {isEven ? "Even" : "odd"} <br />
      <button onClick={incrNum}>Number - {number}</button>
    </div>
  );
};

export default Memocomp;
