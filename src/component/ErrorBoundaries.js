import React, { Component } from 'react'

export default class ErrorBoundaries extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
      }
      componentDidMount(){
        console.log("Error is occures...");
      }
      componentDidCatch(error, errorInfo) {
        console.log("Error is occures...");
        // Catch errors in any components below and re-render with error message
        this.setState({
          error: error,
          errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
      }
      
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div className="container-sm alert alert-danger my-5" role="alert">
          <h2>Something went wrong. Please Try Again After Some Time</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}
