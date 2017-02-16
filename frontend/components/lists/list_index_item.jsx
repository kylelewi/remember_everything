import React from 'react';
import { Link, hashHistory } from 'react-router';

const ListIndexItem = ({ task }) => (
  <li>
    <Link to={`/main/${list.id}`}>
      {list.name}
    </Link>
  </li>
);

export default ListIndexItem;
