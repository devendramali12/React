import Hoc from "./Hoc";

const Team1 = (props) => {
  console.log(props);

  let { price, incrPrice } = props;

  return (
    <>
      <h2>Team1</h2>
      <h3>Price : Rs. {price} Lakh</h3>
      <button onClick={incrPrice}>Increase Price</button>
    </>
  );
};

export default Hoc(Team1);