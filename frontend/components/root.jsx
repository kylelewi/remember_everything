// frontend/components/root.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';
import App from './app';
import SessionFormContainer from './auth/session_form_container';
import Home from './home';
import AuthPage from './authpage/authpage';
import Main from './main/main';
import TaskShowContainer from './tasks/task_show_container';
import TaskIndexContainer from './tasks/task_index_container';
import ListShowContainer from './lists/list_show_container';


const Root = ({ store }) => {
  function redirectIfLoggedIn(nextState, replace) {
    if (store.getState().session.currentUser) {
      replace("/main");
    }
  }

  function ensureLoggedIn(nextState, replace) {
    if (!store.getState().session.currentUser) {
      replace("/");
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>

        <Route path="/" component={ App }>
          <IndexRoute component={Home} onEnter={redirectIfLoggedIn} />
          <Route path="/login" component={ AuthPage } onEnter={redirectIfLoggedIn} />
          <Route path="/signup" component={ AuthPage } onEnter={redirectIfLoggedIn} />
          <Route path="/main" component={ Main } onEnter={ensureLoggedIn}>
            <IndexRoute component={TaskIndexContainer} />
            <Route path="tasks" component={TaskIndexContainer} >
              <Route path=":taskId" component={TaskShowContainer} />
            </Route>
            <Route path="lists/:listId" component={ListShowContainer} >
              <Route path="tasks/:taskId" component={TaskShowContainer} />
            </Route>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;


// // /main
// <Main>
//   <TaskIndexContainer />
// </Main>
//
// // /main/tasks/task:id
// <Main>
//   <TaskIndexContainer>
//     <TaskShowContainer />
//   </TaskIndexContainer>
// </Main>
//
// // /main/lits/:listId
// <Main>
//   <ListShowContainer />
// </Main>
//
// // /main/lits/:listId/tasks/:taskId
// <Main>
//   <ListShowContainer>
//     <TaskShowContainer />
//   </ListShowContainer>
// </Main>
