import React from "react";
import { Fragment } from "react";

const fragcomp = () => {
  return (
    //? 1St Way
    // <React.Fragment>
    //   <h2>
    //     Fragment is used to wrap multiple elements , without creating any extra
    //     (unnecessary) nodes in DOM.
    //   </h2>
    //   <h3>You Cannot use any props excepts one i.e "Key" props.</h3>
    // </React.Fragment>

    //? 2nd Way
    // <Fragment>
    //   <h2>
    //     Fragments is used to wrap multiple elements, without creating any extra
    //     (unnecessary)nodes in DOM
    //   </h2>
    //   <h3>You Cannot use any props excepts one i.e "Key" props</h3>
    // </Fragment>

    //? 3rd way
    <>
      <h2>
        Fragments is used to wrap multiple elements, without creating any extra
        (unnecessary)nodes in DOM
      </h2>
      <h3>You cannot use any props.</h3>
    </>
  );
};

export default fragcomp;
