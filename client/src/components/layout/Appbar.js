import AppBar from '@material-ui/core/AppBar';
import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Copyright from '@material-ui/icons/Copyright';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
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
  }
})

const AppBarComponent = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Button> Intern Hub </Button>
          <div className={classes.grow}></div>
          <Button> Login </Button>
          <Button> Register </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AppBarComponent);