import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class FeedbackReviewRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { employee, review } = this.props;
    if (!employee || !review) { return null; }

    return (
      <div>
        <h4> Review { review.id } </h4>
        <p> Feedback: by { review.attributes.reviewer_name } </p>
        <p> { review.attributes.feedback }</p>
      </div>
    );
  }
}

FeedbackReviewRow.propTypes = {
  employee: PropTypes.object,
  review: PropTypes.object
}

export default FeedbackReviewRow;
