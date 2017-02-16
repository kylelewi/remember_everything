import React from 'react';
import { Link, hashHistory } from 'react-router';

const TaskIndexItem = ({ task, router }) => (
  <li>
    <Link to={`/main/${task.id}`}>
      {task.name}
    </Link>
  </li>
);

export default TaskIndexItem;
