const House = (props) => {
  console.log(props); // {captain: 'Akshita', house: 'red', students: 150}

  //! 1st way to give default value for props

  // let  {captain = "Sanket" , house ="Yellow" , students = "To be counted"} = props

  let { captain, house, students } = props;
  return (
    //!2nd way
    <>
      <h2>House</h2>
      <h3>House name : {house || "yellow"}</h3>
      <h3>Captain : {captain || "To be decided"}</h3>
      <h3>No. of students : {students || "To be counted"}</h3>
    </>
  );
};

export default House;
