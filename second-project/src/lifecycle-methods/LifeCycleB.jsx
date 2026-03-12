import { Component } from "react";

class LifecycleB extends Component {
  //3  UnMounting Phase

  componentWillUnmount() {
    console.log("LifeCycleB componentWillUnmount");
  }

  render() {
    return (
      <>
        <h2>LifeCycleB</h2>
      </>
    );
  }
}

export default LifecycleB;
