import { values } from 'lodash';

export const objectToArray = (object) => {
  return Object.keys(object).map(id => object[id]);
};

export const countTasks = (tasks) => {
  const tasksArray = Object.keys(tasks).map(id => tasks[id]);
  return tasksArray.length;
};

export const sumEstimates = (tasks) => {
  const tasksArray = Object.keys(tasks).map(id => tasks[id]);
  let sum = 0;
  tasksArray.forEach(task => {
    sum += task.estimate;
  });

  return sum;
};

export const dueToday = (tasks) => {
  var today = new Date();
  var dateToday = new Date(today.getFullYear() , today.getMonth(), today.getDate()).getTime();

  const tasksArray = Object.keys(tasks).map(id => tasks[id]);
  let count = 0;
  tasksArray.forEach(task => {
    const taskDate = new Date(task.due_date).getTime();
    if (dateToday === taskDate + 18000000) {
      count += 1;
    }
  });

  return count;
};


export const dueTomorrow = (tasks) => {
  var today = new Date();
  var dateToday = new Date(today.getFullYear() , today.getMonth(), today.getDate()).getTime();
  var dateTomorrow = dateToday + 86400000;

  const tasksArray = Object.keys(tasks).map(id => tasks[id]);
  let count = 0;
  tasksArray.forEach(task => {
    const taskDate = new Date(task.due_date).getTime();
    if (dateTomorrow === taskDate + 18000000) {
      count += 1;
    }
  });

  return count;
};

export const tasksOverdue = (tasks) => {
  var today = new Date();
  var dateToday = new Date(today.getFullYear() , today.getMonth(), today.getDate()).getTime();

  const tasksArray = Object.keys(tasks).map(id => tasks[id]);
  let count = 0;
  tasksArray.forEach(task => {
    const taskDate = new Date(task.due_date).getTime();
    if(taskDate === 0) return;
    if (dateToday > taskDate + 18000000) {
      count += 1;
    }
  });

  return count;
};

export const tasksCompleted = (tasks) => {
  const tasksArray = Object.keys(tasks).map(id => tasks[id]);
  let count = 0;
  tasksArray.forEach(task => {
    if (task.complete) {
      count += 1;
    }
  });

  return count;
};
