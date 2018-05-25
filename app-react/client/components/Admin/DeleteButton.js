import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deleteFunction && this.props.deleteFunction(this.props.employee.attributes.id);
  }

  render() {
    return (
      <button onClick={ this.handleClick } >
        Delete
      </button>
    );
  }
}

DeleteButton.propTypes = {
  employee: PropTypes.object,
  deleteFunction: PropTypes.func
}

export default DeleteButton;
