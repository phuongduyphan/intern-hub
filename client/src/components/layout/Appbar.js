import AppBar from '@material-ui/core/AppBar';
import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import LogOutIcon from '@material-ui/icons/PowerSettingsNewSharp';

import defaultAvatar from '../../asset/avatar/default.jpg';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ChipInput from 'material-ui-chip-input';
import MediaQuery from 'react-responsive';


import MenuToggle from './MenuToggle';
import AppButton from './AppButton';




const styles = theme => ({

  content: {
    display: 'flex',
    justifyContent: 'center'
  },
  appBar: {

    position: 'fixed',
  },
  grow: {
    flexGrow: 1,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    wrap: 'nowrap',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  searchIcon: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit,
  },

  logOutButton: {

  },
  signButton: {
    marginLeft: theme.spacing.unit * 2,
  },
  chipInput: {
    backgroundColor: '#606f80',
  }

})

const AppBarComponent = (props) => {
  const { 
    classes, 
    data, 
    user,
    signButton, 
    loginButton, 
    internHubButton, 
    handleAddChip,
    handleDeleteChip ,
    logoutButton,
    isAuthenticated
  } = props;


  const guestRender = (
    <div>
      <Button onClick={loginButton} className="accountButton" variant='contained' color='secondary'> Login </Button>
     
      <Button className={classes.signButton +" accountButton"}  variant='contained' color='primary' onClick={signButton}> SignUp </Button>
    
    </div>
  );

  const authRender = (
    <div className={classes.row}>
      <Tooltip title={data.user.displayname}>
        <Avatar src={defaultAvatar} className={classes.avatar} />
      </Tooltip>
      <Tooltip title="Log Out">
        <IconButton onClick={logoutButton}>
          <LogOutIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
  
  const RecruitAppButton =(
    <>
    <AppButton buttonLabel="Students" link="/students" />
    <AppButton buttonLabel="Post Jobs" link="/" />
    </>
  )
  const StudentAppButton =(
    <>
      <AppButton buttonLabel="All Jobs" link="/jobs" />
    </>
  )

  console.log(data.user.role);

  return (
    
    <React.Fragment>
      <AppBar  className={classes.appBar +' myNavbar'}>
        <Toolbar>
          <div className ='logo'
            onClick={internHubButton}
          > 
            Intern-Hub 
          </div>
          <MediaQuery query="(min-device-width: 600px)">
          <div className='appButtonGroup'>
            {(user.role==="recruiter")?  RecruitAppButton :StudentAppButton  }
          </div>

          <div className={classes.grow}></div>
          {isAuthenticated ? authRender : guestRender }
          </MediaQuery>
          <MediaQuery query="(max-device-width: 600px)">
            <div className={classes.grow}></div>
            <div className="menuToggle">
                    <input type="checkbox" />
                    <span />
                    <span />
                    <span />
                    <ul className="menu">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Info</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </div>
          </MediaQuery>

        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

AppBar.propTypes = {
 
};



export default withStyles(styles)(AppBarComponent);
