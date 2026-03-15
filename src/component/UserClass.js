import React from "react";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor called");
  }

  componentDidMount = () => {
    console.log("componentDidMount called");
  };

  render() {
    const { name } = this.props;
    console.log("render called");
    return (
      <div className="user-container">
        <h3>Count: {this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <h3>User Name : {name}</h3>
        <h4>Location : New York</h4>
        <h5>Email : Chhaya@gmail.com</h5>
      </div>
    );
  }
}
