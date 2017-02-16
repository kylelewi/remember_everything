import React from 'react';
import { Link, hashHistory } from 'react-router';

const TaskIndexItem = ({ task, router }) => (
  <li>
    <Link to={`/tasks/${task.id}`}>
      {task.name}
    </Link>
  </li>
);

export default TaskIndexItem;
