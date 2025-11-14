import React from "react";

// Object Oriented Programming
class ClassGreetings extends React.Component {
  constructor(props) {
    super(props);

    // State declaration
    this.state = {
      message: "Hello Makkale",
      count: 0,
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    console.log("Component Will Mount");
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  static getDerivedStateFromProps() {
    console.log("Get Derived State From Props");
    return {};
  }

  shouldComponentUpdate() {
    console.log("Should Component update");
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log("Component Will Update");
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleChange}>Count: {this.state.count}</button>
      </div>
    );
  }
}
export default ClassGreetings;
