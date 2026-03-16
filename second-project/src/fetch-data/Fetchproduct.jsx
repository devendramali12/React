import { useEffect } from "react";
import axios from "axios";

const Fetchproduct = () => {
  async function getData() {
    let response = await axios.get("https://fakestoreapi.com/products"); //returns a promise
    console.log(response); //{data : [{..},{..},{..},.]}
    console.log(response.data); // [{..},{..},{..},.]
  }

  useEffect(() => {
    getData();
  }, []);

  return <div>Fetchproduct</div>;
};

export default Fetchproduct;
