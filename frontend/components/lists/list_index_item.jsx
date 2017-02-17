import React from 'react';
import { Link, hashHistory } from 'react-router';

const ListIndexItem = ({ list }) => (
  <li>
    <Link to={`/main/lists/${list.id}`}>
      {list.name}
    </Link>
  </li>
);

export default ListIndexItem;
