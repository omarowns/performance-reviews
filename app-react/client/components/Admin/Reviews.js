import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.renderReviews = this.renderReviews.bind(this);
  }

  componentDidMount() {
    this.props.getAdminReviews && this.props.getAdminReviews();
  }

  renderReviews() {
    const { reviews = [] } = this.props;
    if (reviews.length < 1) {
      return null;
    }

    return reviews.map(review => {
      return (
        <li>
          <div>
            <p>
              Reviewer: <Link to={`/admin/employees/${review.attributes.reviewer_id}`}>{ review.attributes.reviewer_name }</Link> <br />
              Reviewee: <Link to={`/admin/employees/${review.attributes.reviewee_id}`}>{ review.attributes.reviewee_name }</Link> <br />
              Status: { review.attributes.status }
            </p>
          </div>
          <div className="control-buttons">
            <button>
              <Link to={`/admin/reviews/${review.attributes.id}`}>Show</Link>
            </button>
          </div>
          <hr />
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h4> Reviews </h4>
        <ul>
          { this.renderReviews() }
        </ul>
      </div>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.array
}

export default Reviews;
