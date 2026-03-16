//rcc
import { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  //!1. Mounting Phase

  constructor(props) {
    super(props);
    this.state = {
      subject: "Reactjs",
    };
    // This is the best place to initialize the state and bind 'this' keyword.
    // Here you cannot code for side-effects.
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps() {
    //Rarely used method.
    // To get the derived state depeneding on the value of props.
    // Here you cannot code for side-effects.
    // Returns an object or null.
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    //! This method gets invoked immediately after the render method and ONLY ONCE.
    //! Here you can code for side-effects.
    console.log("LifecycleA componentDidMount");
  }

  //!2. Updating Phase

  shouldComponentUpdate() {
    //Decides whether the component should update or not.
    //Returns a boolean value.
    // Here you cannot code for side-effects.
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    // Rarely used method.
    //This method is used to get the value before update.
    //Either returns a value or null.
    // Here you cannot code for side-effects.
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    //! This method gets invoked after every re-rendering of component.
    //! Here you can code for side-effects.
    console.log("LifecycleA componentDidUpdate");
  }

  render() {
    //! This is the only method that is mandatory to use.
    // Here you cannot code for side-effects.
    console.log("LifecycleA render");
    return (
      <>
        <h2>LifecycleA</h2>
        <h3>Subject : {this.state.subject}</h3>
        {this.state.subject == "Reactjs" ? <LifecycleB /> : <></>}
        <button onClick={() => this.setState({ subject: "Nodejs" })}>
          Change subject
        </button>
      </>
    );
  }
}

export default LifecycleA;
