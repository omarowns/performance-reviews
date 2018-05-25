import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import PendingReviewRow from './PendingReviewRow';
import FeedbackReviewRow from './FeedbackReviewRow';

class Employee extends Component {
  constructor(props) {
    super(props);
    this.renderEmployeeDetails = this.renderEmployeeDetails.bind(this);
    this.renderPendingReviews = this.renderPendingReviews.bind(this);
    this.renderFeedbackReviews = this.renderFeedbackReviews.bind(this);
  }

  componentDidMount() {
    const { params: { employee_id = 1 } } = this.props;
    this.props.getEmployee && this.props.getEmployee(employee_id);
    this.props.getPendingReviews && this.props.getPendingReviews(employee_id);
    this.props.getFeedbacksReviews && this.props.getFeedbacksReviews(employee_id);
  }

  renderEmployeeDetails() {
    const { employee } = this.props;
    if (!employee) return null;

    return (
      <div>
        <em>
          <h2>{ employee.name }</h2>
        </em>
      </div>
    );
  }

  renderPendingReviews() {
    const { employee, pendingReviews } = this.props;
    if (pendingReviews.length < 1) {
      return null;
    }

    return pendingReviews.map(review => {
      return (
        <li>
          <PendingReviewRow
            employee={employee}
            review={review}
            finishFunction={this.props.postFinishEmployeeReview}
          />
        </li>
      );
    });
  }

  renderFeedbackReviews() {
    const { employee, feedbackReviews } = this.props;
    if (feedbackReviews.length < 1) {
      return null;
    }

    return feedbackReviews.map(review => {
      return (
        <li>
          <FeedbackReviewRow
            employee={employee}
            review={review}
          />
          <hr />
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h1> Employee </h1>
        <hr />
        { this.renderEmployeeDetails() }
        <hr />
        <h3>Pending Performance Reviews</h3>
        <ul>
          { this.renderPendingReviews() }
        </ul>
        <hr />
        <h3>My Performance Reviews</h3>
        <ul>
          { this.renderFeedbackReviews() }
        </ul>
      </div>
    );
  }
}

Employee.propTypes = {
  employee: PropTypes.object
}

export default Employee;
