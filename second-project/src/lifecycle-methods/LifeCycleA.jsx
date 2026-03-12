import React, { Component } from "react";
import LifecycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  //! 1 Mounting Phase
  constructor(props) {
    super(props);
    this.state = {
      subject: "ReactJS",
    };
    // this is the best place to initailize the state and bind this keyword
    // here you cannot code for side -effects
    console.log("LifeCycleA Constructor");
  }
  static getDerivedStatefromProps() {
    // rearly used method.
    // to get the dervied state depending on the value of props.
    // here you cannot code for side -effects
    // returns an object or null
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    //! This Method gets invoked immediately after the render method and ONLY ONCE
    //! Here You Can Code for side -effects
    console.log("LifeCycleA componenetDidMount");
  }
  //! 2. Updating Phase

  shouldComponentUpdate() {
    // Decides whether the component should update or not .
    // Returns a boolean value
    // Here you can not code for side - effects
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate() {
    // Rarely Used Method
    // This method is used to get the value before update.
    // Returns avalue Or null.
    // Here You cannot code for side -effects
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    //? This method gets invoked after every re-rendering of component.
    //? Here We Can Code for Side Effcts
    console.log("LifeCycleA componentDidUpdate");
  }

  render() {
    //! This is the only method that is mandatory to use.
    //? Here you cannot code for side-effects
    console.log("LifecyvleA render");
    return (
      <>
        <h2>LifeCycleA</h2>
        <h3>Subject : {this.state.subject}</h3>
        {this.state.subject == "ReactJS" ? <LifecycleB /> : <> </>}
        <button onClick={() => this.setState({ subject: "NodeJs" })}>
          Change Subject
        </button>
      </>
    );
  }
}

export default LifeCycleA;
