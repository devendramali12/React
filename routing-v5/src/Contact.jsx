import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  //! <Outlet/> => It should be placed inside the parent component ,
  //!  to specify where exactly the child route should be displayed.
  return (
    <>
      <h2>Contact</h2>
      <Link to="/contact/mobile">Click here for mobile number.</Link>
      <Outlet />
    </>
  );
};

export default Contact;
