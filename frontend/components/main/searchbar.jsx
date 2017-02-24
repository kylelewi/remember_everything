import React from 'react';
import { Link, withRouter } from 'react-router';


class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
    this.handleLogout = this.handleLogout.bind(this);
    this.onTermChange = this.onTermChange.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => this.props.router.push("/"));
  }

  onTermChange(e) {
    this.setState({searchText: e.currentTarget.value});
    this.props.filterTasks(e.currentTarget.value);
  }

  render() {
    return (
      <div className="searchbar clearfix">
        <div
          className="search-field-container" >
          <input
            className="search-field"
            type="text"
            onChange={this.onTermChange}
            placeholder="Search your tasks..."/>

          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        <navbar className="main-navbar">
          <button onClick={this.handleLogout}>Log out</button>
        </navbar>
      </div>
    );
  };
}

export default withRouter(Searchbar);
