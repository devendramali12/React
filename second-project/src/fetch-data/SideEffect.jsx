import { useState, useEffect } from "react";

const SideEffect = () => {
  let [count, setCount] = useState(0);
  let [number, setNumber] = useState(0);

  let incrCount = () => setCount(count + 1);
  let incrNum = () => setNumber(number + 1);
  //! useEffect is used to handle the side-effects.
  //Syntax : useEffect(callbackfunc, array of dependency)

  //! useEffect() with empty array of dependency behaves like componentDidMount().
  //  useEffect(()=>{
  //     console.log("useEffect getting invoked.");
  //  },[])

  //! useEffect() with some value of dependency behaves like componentDidUpdate().
  useEffect(() => {
    console.log("useEffect getting invoked.");
  }, [count]);

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={incrCount}>Incr count</button>
      <h2>Number : {number}</h2>
      <button onClick={incrNum}>Incr number</button>
    </div>
  );
};

export default SideEffect;
