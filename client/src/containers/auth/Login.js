import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import LoginComponent from '../../components/auth/Login';
import {loginUser} from '../../redux/actions/authAction';
import store from '../../redux/store';
import {CREATE_ACCOUNT_SUCCESS} from '../../redux/actions/type';

class LoginContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      errors: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isAuthenticated) {
      this.props.history.push('/stu-profile');
    }

    if(nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }

  componentDidMount() {
    store.dispatch({
      type: CREATE_ACCOUNT_SUCCESS,
      payload: {
        isRegisterSuccess: false,
      }
    });
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

    const userLogin = {
      username: this.state.userName,
      userpass: this.state.password,
    };
    console.log(userLogin);
    
    this.props.loginUser(userLogin);
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

export default connect(mapStateToProps, {loginUser})(LoginContainer);