import { useState } from "react";

const Firststate = () => {
  //   let [state, setState] = useState("Helloo");
  let [plant, setPlant] = useState("Money Plant");
  console.log(plant);
  //   console.log(state);

  let [sport, setSport] = useState("Hockey");
  // ! 1 St Approch
  let changePlant = () => {
    setPlant("Rubber Plant");
  };

  let changeSport = () => {
    setSport("Cricket");
  };

  // ? 2nd Way
  let [gender, setGender] = useState("Male");
  console.log(gender);

  let [online, setOnline] = useState(true);
  console.log(online);

  let [array, setArray] = useState([1, 2, 3, 4, 5]);
  console.log(array);

  let [movie, setMovie] = useState({
    moviename: "Golmaal",
    moviepart: 2,
    movieLanguage: "Hindi",
  });
  console.log(movie);

  let { moviename, moviepart, movieLanguage } = movie; // destructuring

  let changeMovie = () => {
    setMovie({
      moviename: "InsideOut",
      moviepart: 1,
      movieLanguage: "English",
    });
  };
  return (
    <>
      {/* //! 1St Way */}
      <h2>Plant : {plant}</h2>,<br />
      <button onClick={changePlant}>Change Plant</button>
      <br />
      <h2>Sport :- {sport}</h2> <br />
      <button onClick={changeSport}>Change Sport</button> <br />
      {/* //? 2nd Way */}
      <h2>Gender :- {gender}</h2>
      <button onClick={() => setGender("Female")}>Change Gender</button>
      <h2>
        I am Going To Watch {moviename} of part {moviepart} in {movieLanguage}{" "}
        <br />
        <button onClick={changeMovie}>Change Movie</button>
      </h2>
    </>
  );
};

export default Firststate;
