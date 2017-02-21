import React from 'react';
import { Link, hashHistory } from 'react-router';

const ListIndexItem = ({ list, count }) => (
  <li>
    <Link to={`/main/lists/${list.id}`}>
      {list.name} { count }
    </Link>
  </li>
);

export default ListIndexItem;
