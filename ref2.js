import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.nameRef = React.createRef()
    this.ageRef = React.createRef()
    this.deptRef = React.createRef()
  }
  state = {
    name: '',
    age: '',
    dept: ''
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log('this.nameRef ====>', this.nameRef.current.value)
    console.log('this.ageRef ====>', this.ageRef.current.value)
    console.log('this.deptRef ====>', this.deptRef.current.value)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Name: </h1>
        <input ref={this.nameRef} />
        <h1>Age: </h1>
        <input ref={this.ageRef} />
        <h1>Department: </h1>
        <input ref={this.deptRef} /> <br />
        <input type='submit' value='Submit form' />
      </form>
    )
  }
}
export default App
