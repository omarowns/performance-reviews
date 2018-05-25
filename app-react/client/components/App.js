import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    )
  }
};

export default App;
