import React from 'react';
import { Link, withRouter } from 'react-router';
import * as Selectors from '../../util/selectors';

const Filters = props => {
  return (
    <div className="filters">
      <Link to={`/`}>All Tasks</Link>
      <Link to={`/all`}>Today</Link>
      <Link to={`/all`}>Tomorrow</Link>
      <Link to={`/all`}>This Week</Link>
    </div>
  );
};

export default Filters;
