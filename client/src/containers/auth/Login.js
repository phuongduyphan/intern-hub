import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import LoginComponent from '../../components/auth/Login';

class LoginContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      errors: "",
    };
  }

  onChangeText = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  signButton = (e) => {
    e.preventDefault();
    this.props.history.push('/register');
  };

  loginButton = (e) => {
    e.preventDefault();
    
  };


  render() {
    console.log(this.state);
    return (
      <div>
        <LoginComponent 
          data={this.state} 
          onChangeText={this.onChangeText}
          signButton={this.signButton}
          loginButton={this.loginButton}
      />
      </div>
    );

  }
}

LoginContainer.propTypes = {
  
};


const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(LoginContainer);