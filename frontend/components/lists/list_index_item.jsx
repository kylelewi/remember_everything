import React from 'react';
import { Link, hashHistory } from 'react-router';

const ListIndexItem = (props) => {
  return (
    <li>
      <Link className="menu-item-link" to={`/main/lists/${props.list.id}`}>
        <div className="menu-item menu-item-below">
          <p className="filter-name">{props.list.name}</p>
          <div className="count-icon">{
              props.tasks.filter(task => props.list.id === task.list_id).length
            }</div>
        </div>
      </Link>
    </li>
  );
};

export default ListIndexItem;
