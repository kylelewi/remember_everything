export default class TaskFilters {
  constructor(tasks) {
    this.tasks = tasks;
    this.tasksArray = Object.keys(this.tasks).map(id => this.tasks[id]);
    this.today = new Date().setHours(0, 0, 0);
    this.tomorrow = new Date().setHours(0, 0, 0) + 86400000;
    this.tasksByStatus = this.tasksByStatus.bind(this);
    this.tasksByDueDate = this.tasksByDueDate.bind(this);
    this.taskDueDate = this.taskDueDate.bind(this);
  }

  tomorrowDate() {
    let tomorrow = new Date().setHours(0, 0, 0);
    return tomorrow.setDate(tomorrow.getDate() + 1);
  }

  tasksByStatus(bool) {
    return this.tasksArray.filter(task => task.complete === bool);
  }

  taskDueDate(task) {
    let taskDate = task.due_date.split("-").map(string => parseInt(string));
    let dueDate = new Date();
    dueDate.setFullYear(taskDate[0]);
    dueDate.setMonth(taskDate[1] - 1);
    dueDate.setDate(taskDate[2]);
    dueDate.setHours(0, 0, 0);
    return dueDate;
  }

  tasksByDueDate(due) {
    let tasks;

    let incomplete = this.tasksByStatus(false);
    switch(due) {
      case "today":
        tasks = incomplete.filter(task => {
          let difference = this.today - this.taskDueDate(task);
          return (Math.abs(difference) < 1000);
        });
        break;
      case "tomorrow":
        tasks = incomplete.filter(task => {
          let difference = this.tomorrow - this.taskDueDate(task);
          return ((difference > -1000) && (difference < 1000));
        });
        break;
      case "week":
        tasks = incomplete.filter(task => (this.taskDueDate(task) - this.today <= 604800000));
        break;
      default:
        return null;
    }
    return tasks;
  }
}
