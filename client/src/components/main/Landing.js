import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';

class Landing extends Component {
  render() {
    return (
      <div>
        Login
      </div>
    );

  }
}


export default connect(null)(Landing);