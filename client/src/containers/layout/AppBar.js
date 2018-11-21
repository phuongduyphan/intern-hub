import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';

class AppBar extends Component {
  render() {
    return (
      <div>
        AppBar
      </div>
    );

  }
}


export default connect(null)(AppBar);