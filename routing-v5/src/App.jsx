import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Users from "./Users";
import Mobile from "./Mobile";
import Notfound from "./Notfound";
//Routing-v5
//installation command :  npm i react-router-dom

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="/contact/mobile" element={<Mobile />} />
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </BrowserRouter>
  );
};

export default App;
