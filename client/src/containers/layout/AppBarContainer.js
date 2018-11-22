import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import AppBar from '../../components/layout/Appbar';

import { withRouter } from 'react-router-dom';
import { logOutUser } from '../../redux/actions/authAction';

class AppBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      anchorEl: null,
    };
  }

  handleLogOut = (event) => {
    event.preventDefault();
    this.props.logOutUser();
    this.props.history.push('/');
  }

  signButton = (e) => {
    e.preventDefault();
    this.props.history.push('/register');
  }

  loginButton = (e) => {
    e.preventDefault();
    this.props.history.push('/login');
  }

  internHubButton = (e) => {
    e.preventDefault();
    this.props.history.push('/');
  }
  
   
  render() {

    return (
      <div>
        <AppBar 
          data={this.state} 
          handleLogOut={this.handleLogOut} 
          internHubButton={this.internHubButton}
          loginButton={this.loginButton}
          signButton={this.signButton}
        />
      </div>
    );

  }
}

AppBarContainer.propTypes = {
  auth: PropTypes.object.isRequired,  
  logOutUser: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {logOutUser})(withRouter(AppBarContainer));