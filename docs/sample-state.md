{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createTask: {errors: ["name can't be blank"]}
  },
  tasks: {
    1: {
      name: "Todo Item",
      due_date: "Some Date"
      estimate: "a million hours"
      list_id: 1
      author_id: "whatever user"
    }
  },
  lists: {
    1: {
      name: "Some List",
      author_id: 1,
    }
  }
}
