import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import {Link} from 'react-router';

class SignIn extends Component {
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

  signIn() {
    console.log("state", this.state);
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(err => {
        this.setState({ error: err });
        console.log("error", err)
      })
  }

  render() {
    return (
      <div className="form-inline" style={{ margin: '5%' }}>
        <h2>sign in</h2>
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
          <button className="btn btn-primary" type="button" onClick={() => this.signIn()}>
            Sign in
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signup'}>sign up instead</Link></div>
      </div>
    )
  }
}

export default SignIn;