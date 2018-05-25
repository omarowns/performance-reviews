import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="control-buttons">
          <button>
            <Link to='/admin'>Admin</Link>
          </button>
          <button>
            <Link to='/employees'>Employees</Link>
          </button>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
}

export default Header;
