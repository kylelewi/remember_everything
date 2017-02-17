import React from 'react';
import SearchbarContainer from './searchbar_container';
import Navigation from './navigation';
import Filters from './filters';
import TaskIndexContainer from '../tasks/task_index_container';
import TaskShowContainer from '../tasks/task_show_container';

const Main = props => (
  <div className="main-container">
    <SearchbarContainer />
    <Navigation />
    { props.children }
  </div>
);

export default Main;
