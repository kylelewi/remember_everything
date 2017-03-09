# Remember Everything

[RememberEverything live][heroku]

[heroku]: http://remembereverything.info

Remember Everything is a full-stack web application inspired by RememberTheMilk. It utilizes a Rails backend (fashioned as an API) to be used with React-Redux on the front end.

## Features & Implementation

A list of some of the feature currently included in Remember Everything:
  - Ability to create, update, and destroy tasks
  - Task due dates, time estimates, and lists they belong to can also be modified
  - Remember Everything has an intuitive index ("All Tasks") view
  - Users can batch update tasks by checking them in the index view
  - Users can create lists to organize their tasks into logical categories
  - Remember Everything also features a task search bar for the user with a lot on their plate!

### Task Rendering and Editing

  The user experience starts with creating an account. After creating an account, users can create tasks stored in the tasks database with columns for `id`, `user_id`, `task_name`, `list_id`, `due_date`, and `time_estimate`. Upon logging in, an API call is made to the database and fetches all the tasks associated with that user (filtering on the user_id). Using redux state management, those tasks are stored in global state until the user logs out.

  Tasks are rendered in the index view. Clicking on a task in the index view displays the task show view. The task show view is editable and doubles as the task edit view. Edits to the task are updated in real time for a clean, professional user experience.

  ![alt text](https://raw.githubusercontent.com/bongatoughy/remember_everything/master/docs/screenshots/root_screenshot.png "Remember Everything Screenshot")

### Lists

  New lists can be created at anytime. The Lists table in the database contains a column for list_id and the name of the list. Rendering a list index view will display all tasks that have that list's id stored in the task table's list_id column.

  An interesting design feature to point out is that the list show page and tasks index view use the same presentational component in but are connected to different container components. This allows the view styling to remain exactly the same for both tasks index and list show while allowing different data (in the form of props) to be passed to the same component.


### Batch Update

  The index view (task index and list show) has a batch update feature. Each row in the index view contains a checkbox. The user can select multiple tasks at once by checking the checkbox and selecting a batch update action from the icon menu at the top of the index view.

  This feature was achieved by creating a new slice of state within the tasks state.

  ```javascript
  const initialState = {
    tasks: {},
    checkedTasks: {},
    errors: [],
    success: false
  };
  ```

  The "checked" property is stored at the task index component level, but the index component passes the property to each of its children along with a function to toggle the status (true/false) of that row's checked property.

  ```javascript
  const mapStateToProps = state => {
    let filteredTasks = Selectors.incompleteTasks(state.tasks.tasks);
    return(
      {
        tasks: filteredTasks,
        checked: state.tasks.checkedTasks,
        lists: state.lists,
        searchTerm: state.searchTerm
      }
    );
  };
  ```
  ![alt text](http://kylelewis.co/remember_everything/batch_update_screenshot.gif "Batch Update Screenshot")

### Search

  While the use case of this app could have allowed search to be performed with filters on the front end, I chose to implement search on the backend.

  As the user types into the searchbar, the field is listening for changes. On change, the component triggers an API call fetching all the task names that match the substring in the search input field.
