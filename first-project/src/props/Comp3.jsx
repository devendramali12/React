const Comp3 = (props) => {
  console.log(props); // {weekend : {...}}

  let { weekend } = props; //? destructuring of props object
  console.log(weekend); // {plan : 'watch movie', partner :'mom'}

  let { plan, partner } = weekend; //? destructuring of weekemd object

  return (
    <>
      <h2>Comp3</h2>
      <h3>
        My weekend plan is to {plan} with my {partner}
      </h3>
    </>
  );
};

export default Comp3;
