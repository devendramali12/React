import { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Buttoncomp from "./Buttoncomp";

const Parentcomp = () => {
  let [marks, setMarks] = useState(75);

  let [percent, setPercent] = useState(80);
  //! useCallback(callbackfunc, array of dependecy) is used to memoize a callback function

  // let incrMarks = () => setMarks(marks + 1);

  let incrMarks = useCallback(() => {
    setMarks(marks + 1);
  }, [marks]);

  // let incrPercent = () => setPercent(percent + 1);
  let incrPercent = useCallback(() => {
    setPercent(percent + 1);
  }, [percent]);
  return (
    <>
      <Title />
      <Count count={marks} text="Marks" />
      <Buttoncomp incrfunc={incrMarks}>Increase Marks</Buttoncomp>
      <Count count={percent} text="Percentage" />
      <Buttoncomp incrfunc={incrPercent}>Increase Percent</Buttoncomp>
    </>
  );
};

export default Parentcomp;
