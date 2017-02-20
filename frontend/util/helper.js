export const tasksSelectedStatus = (tasksArray) => {
  let tasksSelectedStatus = {};
  tasksArray.forEach(task => {
    tasksSelectedStatus[task.id] = false;
  });
  return tasksSelectedStatus;
};
