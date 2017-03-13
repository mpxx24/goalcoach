import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  signUp() {
    console.log("state", this.state);
  }

  render() {
    return (
      <div className="form-inline">
        <h2>sign up</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="email"
            onChange={event => this.setState({ email: event.target.value })}
          />
          <input
            type="password"
            className="form-control"
            placeholder="password"
            onChange={event => this.setState({ password: event.target.value })}
          />
          <button className="btn btn-primary" type="button" onClick={() => this.signUp()}>
            Sign up
          </button>
        </div>
      </div>
    )
  }
}

export default SignUp;