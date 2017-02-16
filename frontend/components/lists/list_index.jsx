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
        <ul>
          {
            this.props.lists.map(list => (
              <ListIndexItem
                key={list.id}
                list={list} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default ListIndex;
