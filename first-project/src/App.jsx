//! 1 Functional Based Component

import Message from "./Message";
import Firstcomp from "./Firstcomp";
import Classcomp from "./Classcomp";
import Fragcomp from "./Fragcomp";
import CondRendering from "./conditional-rendering/CondRendering";
import India from "./conditional-rendering/India";
import SriLanka from "./conditional-rendering/SriLanka";
import Newcomp from "./props/Newcomp";
import Greeting from "./props/Greeting";
import ComponentA from "./prop-driling/ComponentA";
// import Inline from "./css-react/Inline";
import Inline from "./css-react/Inline";
import Trainer from "./css-react/Trainer";
import Councellor from "./css-react/Councellor";
import "./global.css";
import Student from "./css-react/Student";
import Navbar from "./task/Navbar";
import Displayuser from "./task/Displayuser";
import Firststate from "./states/Firststate";
import CounterApp from "./states/CounterApp";
import Refcomp from "./refernce/Refcomp";
import Customer from "./context-api/Customer";
import Context1 from "./context-api/Context1";

const App = () => {
  // let month = "February";
  return (
    //? jsx => Extended syntax of js (js+xml)
    //? jsx is used to write html like code with js
    //? use events in camelcase : onClick , onSubmit

    <section className="">
      {/* <h2>Functinal Based component</h2>
      <h2>The ongoing month is {month}</h2>
      <Firstcomp></Firstcomp>
      <Classcomp></Classcomp>
      <Fragcomp></Fragcomp>
      <CondRendering />
      <India></India>
      <SriLanka></SriLanka> */}
      {/* <Inline></Inline>
      <Trainer></Trainer>
      <Councellor></Councellor>
      <Student></Student> */}

      {/* <Newcomp></Newcomp> */}
      {/* {<House captain="Akshita" house="Red" students={150}/>
        <House captain="Shirisha" house="Blue"/>
        <House house="Green" students={140}/> }
        <Mapcomp days={days}/> */}

      {/* <Greeting>Happy Holi</Greeting>
      <Greeting>Happy Diwali</Greeting> */}
      {/* <ComponentA></ComponentA> */}
      {/* <Navbar></Navbar> */}
      {/* <Displayuser></Displayuser> */}
      {/* <Firststate></Firststate> */}
      {/* <CounterApp></CounterApp> */}

      {/* <Message></Message> */}

      {/* <Refcomp></Refcomp> */}

      <Context1></Context1>
    </section>
  );
};

export default App;
