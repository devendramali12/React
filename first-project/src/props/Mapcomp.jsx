import { Fragment } from "react";

const Mapcomp = (props) => {
  console.log(props); //{days: Array(5)}

  let { days } = props; //! destructuring of props object
  console.log(days); // ['mon', 'tue', 'wed', 'thurs', 'fri']

  //! key => key prop is used to give a unique identity for every value.

  return (
    <>
      <h2>Let's learn map method.</h2>
      <ul>
        {days.map((element, index) => {
          console.log(element, index);
          return (
            <Fragment key={index}>
              <li>{element}</li>
            </Fragment>
          );
        })}
      </ul>
    </>
  );
};
export default Mapcomp;
