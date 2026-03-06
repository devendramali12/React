import Hoc from "./Hoc";

const Team2 = (props) => {
  let { price, incrPrice } = props;

  return (
    <>
      <h2>Team2</h2>
      <h3>Price Rs.{price} lakh</h3>
      <button onClick={incrPrice}>Increase Price</button>
    </>
  );
};

export default Hoc(Team2);
