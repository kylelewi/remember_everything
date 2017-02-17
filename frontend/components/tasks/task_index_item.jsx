import React from 'react';
import { Link, hashHistory } from 'react-router';

const TaskIndexItem = ({ task, router }) => {

  function setPathname(router) {
    let path;
    if (router.location.pathname.includes("list")) {
      path = `${router.location.pathname}/tasks/${task.id}`;
    } else {
      path = `/main/tasks/${task.id}`;
    }

    return path;
  }

  return (
    <li>
      <Link to={setPathname(router)}>
        {task.name}
      </Link>
    </li>
  );
}

export default TaskIndexItem;
