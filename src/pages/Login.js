import React from 'react';

const Login = () => {
  return (
    <div className="row justify-content-md-center">
      <div className="col-6">
        <h1>Log In</h1>
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
          <button type="submit" className="btn btn-primary">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
