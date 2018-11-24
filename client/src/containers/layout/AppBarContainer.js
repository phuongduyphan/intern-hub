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
    console.log(nextProps.auth.user.role);
    if(nextProps.auth.user.role === 'student') {
      this.props.history.push('/stu-profile');
    }
    if(nextProps.auth.user.role === 'recruiter') {
      this.props.history.push('/recr-profile');
    }

    if(nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }

    if(nextProps.auth.user) {
      this.setState({ user: nextProps.auth.user });
    }
  }


  componentDidMount() {

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

  handleAddChip = chip => {
    this.setState({ searchInput: [...this.state.searchInput, chip] });
  }


  immutableDelete (arr, index) {
    return arr.slice(0,index).concat(arr.slice(index+1))
  }

  handleDeleteChip = (chip, index) => {
    this.setState({
      searchInput: this.immutableDelete(this.state.searchInput, index)
    });
  }

  render() {
    const isAuthenticated = this.props.auth.isAuthenticated;
    return (
      <div>
        <AppBar
          isAuthenticated={isAuthenticated}
          data={this.state}
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
