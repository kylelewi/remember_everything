import React from 'react';
import { Link, hashHistory } from 'react-router';

const TaskIndexItem = ({ task, router, listId, checked }) => {

  function setPathname(router) {
    let path;
    if (router.location.pathname.includes("list")) {
      path = `/main/lists/${listId}/tasks/${task.id}`;
    } else {
      path = `/main/tasks/${task.id}`;
    }

    return path;
  }

  return (
    <Link to={setPathname(router)}>
      <li>
        <div className="mini-line"></div>
        <input type="checkbox" />
        {task.name}
      </li>
  </Link>
  );
}

export default TaskIndexItem;
