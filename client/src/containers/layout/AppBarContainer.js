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
      searchInput: [],
    };
  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.auth.isAuthenticated) {
      this.setState({isAuthenticated: true});
      this.props.history.push('/stu-profile');
    }

    if(nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }


  componentDidMount() {
    // if(!this.props.isAuthenticated) {
    //   this.props.history.push('/login');
    // }
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
    this.setState({ isAuthenticated: false });
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
    console.log(this.state.searchInput);
    
    return (
      <div>
        <AppBar 
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