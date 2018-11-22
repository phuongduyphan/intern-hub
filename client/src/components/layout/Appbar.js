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
import Button from '@material-ui/core/Button';

const styles = theme => ({
  content: {
    display: 'flex',
    justifyContent: 'center'
  },
  appBar: {
    position: 'relative',
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
  logOutButton: {

  },
})

const AppBarComponent = (props) => {
  const { classes, data, handleLogOut, signButton, loginButton, internHubButton } = props;


  const guestRender = (
    <div>
      <Button onClick={loginButton}> Login </Button>
     
      <Button variant='contained' color='primary' onClick={signButton}> SignUp </Button>
    
    </div>
  );

  const authRender = (
    <div className={classes.row}>
      <Tooltip title={data.userName}>
        <Avatar src={defaultAvatar} className={classes.avatar} />
      </Tooltip>
      <Tooltip title="Log Out">
        <IconButton onClick={handleLogOut}>
          <LogOutIcon />
        </IconButton>
      </Tooltip>
    </div>
  );


  return (
    <React.Fragment>
      <AppBar  className={classes.appBar}>
        <Toolbar>
         
          <Button 
            variant='raised' 
            color='secondary'
            onClick={internHubButton}
          > 
            Intern-Hub 
            
          </Button>
         
          <div className={classes.grow}></div>
          {data.isAuthenticated ? authRender : guestRender }
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AppBarComponent);
