import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBarContainer from './containers/layout/AppBarContainer';
import Landing from './components/main/Landing';
import Register from './containers/auth/Register';
import Login from './containers/auth/Login';
import Footer from './components/layout/Footer';
import Job from './components/jobs/Job';
import JobList from './components/jobs/JobList';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppBarContainer />
            <Route exact path="/" component={ Landing } />
            <div className="container">
              <Route exact path="/register" component={ Register } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/jobs" component= { JobList } />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
