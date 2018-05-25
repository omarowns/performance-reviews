import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class NewReview extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReviewerChange = this.handleReviewerChange.bind(this);
    this.handleRevieweeChange = this.handleRevieweeChange.bind(this);
    this.state = {
      reviewer_id: '1',
      reviewee_id: '1',
    };
  }

  componentDidMount() {
    this.props.getAdminEmployees && this.props.getAdminEmployees();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postAdminReviews && this.props.postAdminReviews(this.state);
  }

  handleReviewerChange(e) {
    this.setState({
      reviewer_id: e.target.value
    });
  }

  handleRevieweeChange(e) {
    this.setState({
      reviewee_id: e.target.value
    });
  }

  renderReviewers() {
    const { employees } = this.props;
    if (employees.length < 1) return null;

    return employees.map(employee => {
      return (
        <option value={ employee.attributes.id }>{ employee.attributes.name }</option>
      );
    })
  }

  render() {
    return (
      <div>
        <h4> New Review </h4>
          <form onSubmit={ this.handleSubmit }>
            <div className='field'>
              <label>Reviewer:</label>
              <select value={ this.state.reviewer_id } onChange={ this.handleReviewerChange } >
                { this.renderReviewers() }
              </select>
            </div>
            <div className='field'>
              <label>Reviewee:</label>
                <select value={ this.state.reviewee_id } onChange={ this.handleRevieweeChange } >
                  { this.renderReviewers() }
                </select>
            </div>
            <button type="submit">
              Save
            </button>
          </form>
      </div>
    );
  }
}

NewReview.propTypes = {
  employees: PropTypes.array
}

export default NewReview;
