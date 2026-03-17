import React from "react";

const Buttoncomp = (props) => {
  let { children, incrfunc } = props;
  console.log(`"Rendering Button Compo for ${children}"`);
  return (
    <div>
      <button onClick={incrfunc}>Increase</button>
    </div>
  );
};

export default React.memo(Buttoncomp);
