import { connect } from 'react-redux';
import Reviews from '../../components/Admin/Reviews';
import {
  getAdminReviews
} from '../../actions/reviews';


function mapStateToProps(state) {
  return {
    reviews: state.reviews.reviews
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAdminReviews: () => dispatch(getAdminReviews())
  };
}

const ReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(Reviews);

export default ReviewsContainer;
