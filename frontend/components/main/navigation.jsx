import React from 'react';
import FiltersContainer from './filters_container';
import ListIndexContainer from '../lists/list_index_container';
import {Link} from 'react-router';

class Navigation extends React.Component {
  componentWillReceiveProps(newProps) {
  }

  render() {
    return (
      <div className="navigation-sidebar">
        <div className="navigation-logo-container clearfix">
          <Link to={"/"}>
            <figure className="logo-container-main ">
              <img className="logo-img" src={window.images.logoBlue} />
              <div className="logo-text">
                <h1 className="logo-line-1-main">Remember</h1>
                <h1 className="logo-line-2-main">Everything</h1>
              </div>
            </figure>
          </Link>
        </div>

        <div className="lists">
          <div className="tasks-filter-container">
            <FiltersContainer />
          </div>
          <div className="filters">
            <ListIndexContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
