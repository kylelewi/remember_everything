## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - SearchbarContainer
 - Sidebar
 - TasksIndexContainer
 - TasksShowContainer
 - ListsShowContainer

**SidebarContainer**
 - TasksFilterIndex
  * TasksFilterItem
 - ListsIndexContainer
  * ListIndexItem

**TasksIndexContainer**
 - TasksFormContainer
  + TasksIndexItem

**ContentContainer**
 - TasksShowContainer
  * TasksShow
 - ListsShowContainer
  * ListsShow

**NewTaskContainer**
 - NewNote
  - RTETools
  - NewNoteButton

**NewTask**
 - NewTaskContainer
   * NewTask

**NewList**
 - NewList

**TaskSearch**
 * AutoSearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/task/:taskId" | "TasksShowContainer" |
| "/home/list/:listId" | "ListsContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-task" | "NewTaskContainer" |
| "/search" | "Search" |
| "/new-list" | "NewList" |
