import LifecycleA from "./lifecycle-methods/LifecycleA";
import Product from "./error-boundary/Product";
import ErrorBoundary from "./error-boundary/ErrorBoundary";
import Modal from "./portals/Modal";
import { useState } from "react";
import SideEffect from "./fetch-data/SideEffect";
import Fetchusers from "./fetch-data/Fetchusers";
import Fetchproduct from "./fetch-data/Fetchproduct";
import Parentcomp from "./memoization/Parentcomp";
import Memocomp from "./memoization/Memocomp";
import TodoList from "./task/TodoList";

const App = () => {
  let [open, setOpen] = useState(false);

  let openModal = () => setOpen(true);
  let closeModal = () => setOpen(false);

  return (
    <>
      {/* <LifecycleA/> */}
      {/* <ErrorBoundary>
     <Product product="Chair"/>
     <Product product="Table"/>
     </ErrorBoundary> */}
      {/* <button onClick={openModal}>Open modal</button>
     <Modal open={open} closeModal={closeModal}/> */}
      {/* <SideEffect/> */}
      {/* <Fetchusers/> */}
      {/* <Fetchproduct /> */}
      {/* <Parentcomp /> */}
      {/* <Memocomp /> */}
      <TodoList />
    </>
  );
};

export default App;
