import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.list;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createList(this.state);
  }

  render() {
    return (
      <div>
        <h3>Add a list</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Please enter a new list name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.update('name')} />
          </label>

          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default ListForm;
