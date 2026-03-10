import React, { useState } from "react";

const Details = () => {
  //? 1. Initialize the state

  let [state, setState] = useState({
    firstName: "",
    lastName: "",
  });
  let { firstName, lastName } = state; //? destructuring

  //? 3. State Updation (onChange)

  let handleChange = (e) => {
    console.log(e.target);
    let { name, value } = e.target; // destrcuring
    setState({ ...state, [name]: value });

    //? ...state  --> spread operator --> {firstName :"kishor",lastName:"kumar"}
    //? state --> spreads the key :value pairs and stores the
  };

  //? 4. submit

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setState({ firstName: "", lastName: "" });
  };

  return (
    //? 2. Pass the value & name attribute in the input fields
    <>
      <h2>Details Form</h2>
      <form action="" onSubmit={handleSubmit}>
        <label>First name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={firstName}
        />
        <br />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={lastName}
        />{" "}
        <br />
        <div>
          <label htmlFor="Gender">Gender</label>
          <input type="radio" />
          <label htmlFor="">Male</label>
          <input type="radio" />
          <label htmlFor="">Female</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Details;

// let e = {
//     target:{
//         name:"firstName",
//         value:"Kishore"
//     }
// }
