import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBarContainer from './containers/layout/AppBarContainer';
import Landing from './components/main/Landing';
import Register from './containers/auth/Register';
import Login from './containers/auth/Login';
import Footer from './components/layout/Footer';
import JobListContainer from './containers/job/JobList';
import JobFormContainer from './containers/job/JobForm';
import StudentProfileContainer from './containers/student/StudentProfile';
import StudentsContainer from './containers/student/Students';
import {Provider} from 'react-redux';
import store from './redux/store';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from './theme/index';
import setAuthToken from './redux/utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import {setCurrentUser, logOutUser} from './redux/actions/authAction';
import './App.css';

if(localStorage.jwtToken) {
  // set token header auth
  setAuthToken(localStorage.jwtToken);
  // decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and isAuth
  store.dispatch(setCurrentUser(decoded));
  // check expried token
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logOutUser());
    window.location.href = '/login';
  }
}



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider theme={theme}>
          <div className="App">
            <AppBarContainer />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/jobs" component= {JobListContainer} />
              <Route exact path="/stu-profile" component={StudentProfileContainer} />
              <Route exact path="/students" component={StudentsContainer} />
              <Route exact path="/add-job" component={JobFormContainer} />
            </div>

          </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
