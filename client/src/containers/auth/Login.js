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
    
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }

  componentDidMount() {
   
   
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
    // console.log(userLogin);
    // if(this.props.auth.user.role === 'student') {
    //   this.props.history.push('/stu-profile');
    // }
    // if(this.props.auth.user.role === 'recruiter') {
    //   this.props.history.push('/recr-profile');
    // }
    
    this.props.loginUser(userLogin);
  };


  render() {
    if(this.props.auth.user) {
      if(this.props.auth.user.role === 'student') {
        this.props.history.push('/stu-profile');
      }
      if(this.props.auth.user.role === 'recruiter') {
        this.props.history.push('/recr-profile');
      }
    }
    
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