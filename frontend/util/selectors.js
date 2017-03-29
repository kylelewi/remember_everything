import { values } from 'lodash';

const taskDueDate = (task) => {
  if (task) {
    let taskDate = task.due_date.split("-").map(string => parseInt(string));
    let dueDate = new Date();
    dueDate.setFullYear(taskDate[0]);
    dueDate.setMonth(taskDate[1] - 1);
    dueDate.setDate(taskDate[2]);
    dueDate.setHours(0, 0, 0);
    return dueDate;
  }
};

const today = () => {
  let today = new Date();
  today.setHours(0, 0, 0);
  return today;
};

export const objectToArray = (object) => {
  return Object.keys(object).map(id => object[id]);
};

export const incompleteTasks = (tasks) => {
  const tasksArray = objectToArray(tasks);
  return tasksArray.filter(task => task.complete === false);
};

export const completedTasks = (tasks) => {
  const tasksArray = objectToArray(tasks);
  return tasksArray.filter(task => task.complete === true);
};

export const tasksDueToday = (tasks) => {
  let thisDay = today();
  let tasksArray = objectToArray(tasks);
  let incomplete = incompleteTasks(tasksArray);

  return incomplete.filter(task => (thisDay - taskDueDate(task) === 0));
};

export const tasksDueTomorrow = (tasks) => {
  let tomorrow = today();
  tomorrow.setDate(tomorrow.getDate() + 1);
  let tasksArray = objectToArray(tasks);
  let incomplete = incompleteTasks(tasksArray);

  return incomplete.filter(task => (tomorrow - taskDueDate(task) === 86400000));
};

export const tasksDueThisWeek = (tasks) => {
  var today = new Date();
  var dateToday = new Date(today.getFullYear() , today.getMonth(), today.getDate()).getTime();
  var dateNextWeek = dateToday + 604800000;
  const tasksArray = incompleteTasks(objectToArray(tasks));

  const filteredTasks = tasksArray.filter(task => (
    (convertDueDate(task) >= dateToday) && (convertDueDate(task) <= dateNextWeek)
  ));
  return filteredTasks;
};

export const sumEstimates = (tasks) => {
  const tasksArray = Object.keys(tasks).map(id => tasks[id]);
  let sum = 0;
  tasksArray.forEach(task => {
    sum += task.estimate;
  });

  return sum;
};

export const convertTime = (timeInMinutes) => {
  let hours = Math.floor(timeInMinutes / 60);
  let minutes = timeInMinutes - (hours * 60);
  return { hours, minutes };
};

export const countTasks = (tasks) => {
  const tasksArray = Object.keys(tasks).map(id => tasks[id]);
  return tasksArray.length;
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
//
//
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
