import React from 'react';
import { Link, withRouter } from 'react-router';


class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => this.props.router.push("/"));
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.filterTasks(this.state.searchText);
  }

  render() {
    return (
      <div className="searchbar clearfix">
        <form
          onSubmit={this.handleSubmit}
          className="search-field-container" >
          <input
            className="search-field"
            type="text"
            onChange={this.update('searchText')} />
        </form>
        <navbar className="main-navbar">
          <Link to={"/"}>Terms of Use</Link>
          <Link to={"/"}>Contact</Link>
          <button onClick={this.handleLogout}>Log out</button>
        </navbar>
      </div>
    );
  };
}

export default withRouter(Searchbar);
