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
      user: {},
      anchorEl: null,
      searchInput: [],
    };
  }

  componentDidMount() {
    if(this.props.auth.isAuthenticated === false) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {


    if(nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }

    if(nextProps.auth.user) {
      this.setState({ user: nextProps.auth.user });
    }
  }

  signButton = (e) => {
    e.preventDefault();
    this.props.history.push('/register');
  }

  loginButton = (e) => {
    e.preventDefault();
    this.props.history.push('/login');
  }

  logoutButton = e => {
    e.preventDefault();
    this.props.logOutUser();
    this.props.history.push('/');
  }

  internHubButton = (e) => {
    e.preventDefault();
    this.props.history.push('/');
  }

  onSearch = e => {
    e.preventDefault();
  }



  render() {
    const isAuthenticated = this.props.auth.isAuthenticated;
    const user = this.state.user;
    console.log (user);
    return (
      <div>
        <AppBar
          isAuthenticated={isAuthenticated}
          data={this.state}
          user={user}
          handleLogOut={this.handleLogOut}
          internHubButton={this.internHubButton}
          loginButton={this.loginButton}
          signButton={this.signButton}
          handleAddChip={this.handleAddChip}
          handleDeleteChip={this.handleDeleteChip}
          logoutButton={this.logoutButton}
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
