import React from 'react';
import { Link, hashHistory } from 'react-router';

const TaskIndexItem = ({ task, router, listId, checked, toggleCheckbox }) => {
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
    <div>
      <Link to={setPathname(router)}>
        <li>
          <div className="mini-line"></div>
          <input type="checkbox"
            onChange={() => toggleCheckbox(task)}
            checked={checked} />
          {task.name}
        </li>
      </Link>
    </div>

  );
}

export default TaskIndexItem;
