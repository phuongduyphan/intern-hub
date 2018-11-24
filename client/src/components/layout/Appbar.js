import AppBar from '@material-ui/core/AppBar';
import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppButton from './AppButton';



const AppBarComponent = (props) => {
  return (
    
    <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top myNavBar">

      <a className="navbar-brand" href="/">
        Intern Hub
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              All Jobs
             </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Companies
             </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Advise
            </a>
          </li>
        </ul>
      </div>
    </nav>

  );
}




export default AppBarComponent;
