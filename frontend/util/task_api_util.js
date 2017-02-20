export const fetchTasks = () => (
  $.ajax({
    method: "GET",
    url: 'api/tasks'
  })
);

export const fetchTask = id => (
  $.ajax({
    method: "GET",
    url: `api/tasks/${id}`
  })
);

export const createTask = task => (
  $.ajax({
    method: "POST",
    url: `api/tasks`,
    data: { task }
  })
);

export const updateTask = task => (
  $.ajax({
    method: "PATCH",
    url: `api/tasks/${task.id}`,
    data: { task }
  })
);

export const filterTasks = filterTerm => (
  $.ajax({
    method: "GET",
    url: `api/tasks/filter/${filterTerm}`,
    data: { filterTerm }
  })
);
