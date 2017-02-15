import React from 'react';
import { Link, withRouter } from 'react-router';

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { username: "", password: "" };
  }

  componentDidMount() {
    this.redirectIfLoggedIn();
    this.props.clearErrors();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.router.pathname !== newProps.router.pathname) {
      this.props.clearErrors();
    }
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.router.goBack());
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
      <div className="login-form">
        <h2>Welcome back, friend!</h2>
        <h3>Please enter your username and password:</h3>
        <form onSubmit={this.handleSubmit}>
          {this.handleErrors('username')}
          <label>Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')} />
          </label>

          <label>Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')} />
          </label>

          <input type="submit" value="Log In" />
        </form>
      </div>
    )
  }
}

export default withRouter(Login);
