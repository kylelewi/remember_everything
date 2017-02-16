import React from 'react';
import SearchbarContainer from './searchbar_container';
import Navigation from './navigation';
import Filters from './filters';

const Main = props => (
  <div className="main-container">
    <SearchbarContainer />
    <Navigation />
  </div>
);

export default Main;
