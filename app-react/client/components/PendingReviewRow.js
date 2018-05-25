import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class PendingReviewRow extends Component {
  constructor(props) {
    super(props);
    this.finishReview = this.finishReview.bind(this);
  }

  finishReview(e) {
    e.preventDefault();

    const { employee, review } = this.props;
    if (!employee || !review) { return null; }

    this.props.finishFunction &&
      this.props.finishFunction(employee.id, review.id);
  }

  render() {
    const { employee, review } = this.props;
    if (!employee || !review) { return null; }

    return (
      <div>
        <h4> Review { review.id } </h4>
        <p> Feedback: { review.reviewee_id } </p>
        <p> { review.feedback }</p>
        <p> Status: { review.status } </p>
        <div className="control-buttons">
          <button>
            <Link to={`/employee/${employee.id}/reviews/${review.id}`}>Edit</Link>
          </button>
          <button onClick={ this.finishReview }>Submit</button>
        </div>
      </div>
    );
  }
}

PendingReviewRow.propTypes = {
  employee: PropTypes.object,
  review: PropTypes.object,
  finishFunction: PropTypes.func
}

export default PendingReviewRow;
