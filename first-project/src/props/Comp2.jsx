const Comp2 = (props) => {
  console.log(props); // {rainbow : Array(7)}

  let { rainbow } = props; //? destructing of props object
  console.log(rainbow); //['violet', 'indigo', 'blue', 'grren', 'yellow', 'orange', 'red']

  let [r1, r2, r3, r4, r5, r6, r7] = rainbow; //? destructuring of array

  return (
    <>
      <h2>Rainbow Colors</h2>
      <ul>
        <li>{r1}</li>
        <li>{r2}</li>
        <li>{r3}</li>
        <li>{r4}</li>
        <li>{r5}</li>s<li>{r6}</li>
        <li>{r7}</li>
      </ul>
    </>
  );
};

export default Comp2;
