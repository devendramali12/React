import React from "react";
import { useRef } from "react";

// !1 Refernce is used to target the jsx element
//? 2 Changes made with refs, it will directly reflect on REAL DOM
//? 3 useRef() is used to create a ref
const Refcomp = () => {
  //! 1 Create a Ref Variable

  let h2ref = useRef();
  console.log(h2ref);

  let paraRef = useRef();

  let changeCss = () => {
    h2ref.current.style.color = "red";
    h2ref.current.style.fontStyle = "normal";
    paraRef.current.style.color = "orange";
    paraRef.current.style.textTransform = "lowercase";
  };

  return (
    //! 2. Pass the ref-variable using a 'ref' prop

    <>
      <h2 ref={h2ref}>Refernce is an inbuilt object</h2>
      <p ref={paraRef}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit iure,
        cumque cum sapiente nisi ut.
      </p>
      <button onClick={changeCss}>Change Css</button>
    </>
  );
};

export default Refcomp;
