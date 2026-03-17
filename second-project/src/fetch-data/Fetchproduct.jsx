import { useEffect, useState } from "react";
import axios from "axios";

const Fetchproduct = () => {
  let [products, setProducts] = useState([]);
  async function getData() {
    let response = await axios.get("https://fakestoreapi.com/products"); //returns a promise
    console.log(response); //{data : [{..},{..},{..},.]}
    console.log(response.data); // [{..},{..},{..},.]
    setProducts(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Products</h2>
      {products.map((value, index) => {
        return (
          <div key={value.id}>
            <h3>{value.title}</h3>
            <h3>Price :- {value.price}</h3>
            <img src={value.image} />
          </div>
        );
      })}
    </>
  );
};

export default Fetchproduct;
