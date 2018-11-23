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
    backgroundColor: '#81D4FA',
  }

})

const AppBarComponent = (props) => {
  const { 
    classes, 
    data, 
   
    signButton, 
    loginButton, 
    internHubButton, 
    handleAddChip,
    handleDeleteChip ,
    logoutButton
  } = props;




  const guestRender = (
    <div>
      <Button onClick={loginButton}> Login </Button>
     
      <Button className={classes.signButton}  variant='contained' color='primary' onClick={signButton}> SignUp </Button>
    
    </div>
  );

  const authRender = (
    <div className={classes.row}>
      <Tooltip title={data.userName}>
        <Avatar src={defaultAvatar} className={classes.avatar} />
      </Tooltip>
      <Tooltip title="Log Out">
        <IconButton onClick={logoutButton}>
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
            onClick={internHubButton}
          > 
            Intern-Hub 
          </Button>
          <SearchIcon className={classes.searchIcon} />
          <ChipInput
            classes={{
              chip: classes.chipInput,
            }}
            value={data.searchInput}
            onAdd={chip => handleAddChip(chip)}
            onDelete={(chip, index) => handleDeleteChip(chip, index)}
          />
          <div className={classes.grow}></div>
          
          {data.isAuthenticated ? authRender : guestRender }
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

AppBar.propTypes = {
 
};


export default withStyles(styles)(AppBarComponent);
