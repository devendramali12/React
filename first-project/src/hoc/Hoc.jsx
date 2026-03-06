//? Higher order Component
//? Used to write reusable logic
import { useState } from "react";

const Hoc = (WrappedComponent) => {
  return function comp() {
    // Reusable Logics
    let [price, setPrice] = useState(20);

    let incrPrice = () => {
      setPrice(price + 20);
    };
    return <WrappedComponent price ={price} incrPrice={incrPrice}></WrappedComponent>;
  };
};
export default Hoc;
