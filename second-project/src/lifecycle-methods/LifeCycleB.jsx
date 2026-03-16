import React, { Component } from "react";

class LifecycleB extends Component {
  //! 3. Unmounting Phase

  componentWillUnmount() {
    console.log("LifecycleB componentWillUnmount");
  }

  render() {
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
