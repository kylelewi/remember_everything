import React from 'react';
import SearchbarContainer from './searchbar_container';
import Navigation from './navigation';
import Filters from './filters';
import TaskIndexContainer from '../tasks/task_index_container';

const Main = props => (
  <div className="main-container">
    <SearchbarContainer />
    <Navigation />
    <TaskIndexContainer />
  </div>
);

export default Main;
