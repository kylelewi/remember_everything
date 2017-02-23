import React from 'react';
import ListIndexItem from './list_index_item';
import ListFormContainer from './list_form_container';

class ListIndex extends React.Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  render() {
    return (
      <div>
        <ListFormContainer />
        <ul className="menu-items">
          {
            this.props.lists.map(list => (
              <ListIndexItem
                 list={list}
                 key={list.id}
                 tasks={this.props.tasks} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default ListIndex;
