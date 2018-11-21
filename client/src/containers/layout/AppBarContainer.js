import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import AppBar from '../../components/layout/Appbar';


class AppBarContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticate: false,
      anchorEl: null,
    };
  }
   
  render() {


    const guestRender = (
      <div>
        
      </div>
    );

    const authRender = (
      <div>

      </div>
    );

    return (
      <div>
        <AppBar props={this.state} />
      </div>
    );

  }
}


export default connect(null)(AppBarContainer);