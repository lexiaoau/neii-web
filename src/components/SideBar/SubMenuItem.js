import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// serve as one Item in Collapse menu
class SubMenuItem extends Component {
  render() {
    const {linkTarget, displayText} = this.props;
    return (
      <li>
          <Link to={linkTarget}>{displayText}</Link>
      </li>
    );
  }
}

export default SubMenuItem;


