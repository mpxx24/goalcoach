import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signUp() {
    console.log("state", this.state);
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(err => {
        this.setState({ error: err });
        console.log("error", err)
      })
  }

  render() {
    return (
      <div className="form-inline" style={{ margin: '5%' }}>
        <h2>sign up</h2>
        <div className="form-group">
          <input
            type="text"
            style={{ marginRight: '5px' }}
            className="form-control"
            placeholder="email"
            onChange={event => this.setState({ email: event.target.value })}
          />
          <input
            type="password"
            style={{ marginRight: '5px' }}
            className="form-control"
            placeholder="password"
            onChange={event => this.setState({ password: event.target.value })}
          />
          <button className="btn btn-primary" type="button" onClick={() => this.signUp()}>
            Sign up
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <Link to={'/signin'}>Already a user? sign in instead</Link>
      </div>
    )
  }
}

export default SignUp;