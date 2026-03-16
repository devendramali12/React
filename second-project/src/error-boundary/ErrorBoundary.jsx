import React, { Component } from 'react'

 class ErrorBoundary extends Component { 

    constructor(props){
        super(props)
        this.state = {
            isError : false  // no error 
        }
    }     
    //!4. Error Handling Phase 

    static getDerivedStateFromError(error){
        // Help to display a fallback UI
        return {isError : true}  
    }

    componentDidCatch(error , info){ 
       // To get the info of error
       console.log(error , info);
    }

  render() {
      if(this.state.isError == true){
        return (
            <>
            <h2>Something went wrong...</h2>
            <h3>Try again after sometime...</h3>
            </>
        )
      } else {
           return this.props.children  
      }
  }
}

export default ErrorBoundary
