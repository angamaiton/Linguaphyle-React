import React, { Component } from 'react';
import firebase from 'firebase';

export default class Register extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const firebaseAuth = firebase.auth();
    firebaseAuth.createUserWithEmailAndPassword(this.email.value, this.pw.value);
  }
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-6">
          <h1>Register</h1>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="registerEmail">Email</label>
              <input
                className="form-control"
                id="registerEmail"
                ref={email => (this.email = email)} placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="registerPass">Password</label>
              <input
                type="password"
                className="form-control"
                id="registerPass"
                placeholder="Password" ref={pw => (this.pw = pw)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    );
  }
}
