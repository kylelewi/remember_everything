import React from 'react';
import Modal from 'react-modal';
import {merge} from 'lodash';

const customStyles = {
  content : {
    width: '350px',
    height: '20%',
    margin: '30% auto 0 auto'
  }
};

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {name: this.props.list.name, modalIsOpen: false };
    // this.state = this.props.list;
  }

  componentWillMount() {
    const appElement = document.getElementById('root');
    Modal.setAppElement(appElement);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createList(this.state);
    this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="lists-div">
        <div className="nav-top" onClick={this.openModal.bind(this)}>
          <div className="nav-top-content">
            <div className="menu-arrow"><i className="fa fa-caret-down" aria-hidden="true"></i></div>
            <div className="all-tasks">Lists</div>
            <div className="add-new-icon">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <Modal className="list-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          contentLabel="Add New List" >
          <i
            className="close-modal fa fa-times"
            aria-hidden="true"
            onClick={this.closeModal.bind(this)}></i>
          <form onSubmit={this.handleSubmit}>
            <label>Add a list
              <p>Please enter a new list name:</p>
              <input
                type="text"
                value={this.state.name}
                onChange={this.update('name')} />
            </label>

            <div className="buttons">
              <input className="button" type="submit" value="Add" />
              <button className="button modal-cancel" onClick={this.closeModal.bind(this)}>Cancel</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default ListForm;
