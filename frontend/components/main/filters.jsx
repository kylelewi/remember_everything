import React from 'react';
import { Link, withRouter } from 'react-router';

const Filters = props => (
  <div className="filters">
    <Link to={`/all`}>All Tasks</Link>
    <Link to={`/all`}>Today</Link>
    <Link to={`/all`}>Tomorrow</Link>
    <Link to={`/all`}>This Week</Link>
  </div>
);

export default Filters;
