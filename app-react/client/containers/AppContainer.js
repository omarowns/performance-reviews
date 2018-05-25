import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {};
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
