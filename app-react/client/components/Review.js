import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Review extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      feedback: ''
    };
  }

  componentDidMount() {
    const { params: { employee_id = 1, id = 1} } = this.props;
    this.props.getEmployeeReview && this.props.getEmployeeReview(employee_id, id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.review &&
        nextProps.review.attributes &&
        nextProps.review.attributes.feedback) {
      this.setState({
        feedback: nextProps.review.attributes.feedback
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { params: { employee_id }, review } = this.props;

    this.props.putEmployeeReview &&
      this.props.putEmployeeReview(employee_id, review.attributes.id, this.state);
  }

  handleChange(e) {
    this.setState({
      feedback: e.target.value
    });
  }

  render() {
    const { review } = this.props;
    if (!review) {
      return null;
    }

    return (
      <div>
        <h3> Review { review.attributes.id } </h3>
        You are making a performance review for: <h5>{ review.attributes.reviewee_name }</h5>
          <form onSubmit={ this.handleSubmit }>
            <div className='field'>
              <label>Feedback:</label>
              <input type='text' value={ this.state.feedback } onChange={ this.handleChange }/>
            </div>
            <button type="submit">
              Save
            </button>
          </form>
      </div>
    );
  }
}

Review.propTypes = {
  review: PropTypes.object
}

export default Review;
