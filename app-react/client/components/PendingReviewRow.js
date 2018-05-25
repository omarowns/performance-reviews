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
      this.props.finishFunction(employee.attributes.id, review.attributes.id);
  }

  render() {
    const { employee, review } = this.props;
    if (!employee || !review) { return null; }

    return (
      <div>
        <h4> Review { review.attributes.id } </h4>
        <p> Feedback: to { review.attributes.reviewee_name } </p>
        <p> { review.attributes.feedback }</p>
        <p> Status: { review.attributes.status } </p>
        <div className="control-buttons">
          <button>
            <Link to={`/employee/${employee.attributes.id}/reviews/${review.attributes.id}`}>Edit</Link>
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
