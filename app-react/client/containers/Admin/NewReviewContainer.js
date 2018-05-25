import { connect } from 'react-redux';
import NewReview from '../../components/Admin/NewReview';
import {
  getAdminEmployees
} from '../../actions/employees';
import {
  postAdminReviews
} from '../../actions/reviews';


function mapStateToProps(state) {
  return {
    employees: state.employees.employees
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAdminEmployees: () => dispatch(getAdminEmployees()),
    postAdminReviews: (data) => dispatch(postAdminReviews(data))
  };
}

const NewReviewContainer = connect(mapStateToProps, mapDispatchToProps)(NewReview);

export default NewReviewContainer;
