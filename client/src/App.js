import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBar from './containers/layout/AppBar';
import Landing from './components/main/Landing';
import Register from './containers/auth/Register';
import Login from './containers/auth/Login';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppBar />
            <Route exact path="/" component={  Landing } />
            <div className="container">
            <Route exact path="/register" component={  Register } />
            <Route exact path="/login" component={  Login } />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
