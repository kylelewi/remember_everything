import React from 'react';
import { Link, withRouter } from 'react-router';

class Signup extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.state = { firstname:"", lastname:"", email:"", username:"", password:"" };
  }

  componentDidMount() {
    this.redirectIfLoggedIn();
    this.props.clearErrors();
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  redirectIfLoggedIn() {
  		if (this.props.loggedIn) {
  			this.props.router.push("/");
  		}
  	}

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state).then(() => this.props.router.push("/main"));
  }

  handleErrors(key) {
    let returnError = null;
    if (this.props.errors) {
      this.props.errors.forEach((error) => {
        if (error.includes(key)) {
          returnError = <p className="error">{error}</p>;
        }
      });
    }
    return returnError
  }

  render() {
    return (
      <div className="signup-form">
        <h2>Welcome to Remember Everything!</h2>
        <h3>Enter your info to create your free account!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>First Name
            {this.handleErrors('First')}
            <input
              type="text"
              value={this.state.firstname}
              onChange={this.update('firstname')}
              placeholder="First Name" />
          </label>
          <label>Last Name
            {this.handleErrors('Last')}
            <input
              type="text"
              value={this.state.lastname}
              onChange={this.update('lastname')}
              placeholder="Last Name" />
          </label>
          <label>Email
            {this.handleErrors('Email')}
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="email" />
          </label>
          <label>Username
            {this.handleErrors('Username')}
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="username" />
          </label>

          <label>Password
            {this.handleErrors('Password')}
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder={"password"} />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default withRouter(Signup);
