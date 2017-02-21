import React from 'react';
import { Link, hashHistory } from 'react-router';

const TaskIndexItem = ({ task, router, listId, checked, toggleCheckbox }) => {
  function setPathname() {
    let path;
    if (router.location.pathname.includes("list")) {
      path = `/main/lists/${listId}/tasks/${task.id}`;
    } else {
      path = `/main/tasks/${task.id}`;
    }

    return path;
  }

  function handleRedirect() {
    toggleCheckbox(task);
    router.push(setPathname());
  }

  return (
    <div>
      <Link onClick={() => toggleCheckbox(task)} to={setPathname(router)}>
        <li>
          <div className="mini-line"></div>
          <input type="checkbox"
            defaultChecked={checked} />
          {task.name}
          </li>
      </Link>
    </div>

  );
}

export default TaskIndexItem;
