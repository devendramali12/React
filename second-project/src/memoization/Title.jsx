import React from "react";

const Title = () => {
  console.log("Rendering Title Component. ");

  return (
    <div>
      <h2>Title : Memoization</h2>
    </div>
  );
};

export default React.memo(Title);
