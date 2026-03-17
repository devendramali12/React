import { useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Buttoncomp from "./Buttoncomp";

const Parentcomp = () => {
  let [marks, setMarks] = useState(75);

  let [percent, setPercent] = useState(80);

  let incrMarks = () => setMarks(marks + 1);
  let incrPercent = () => setPercent(percent + 1);
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
