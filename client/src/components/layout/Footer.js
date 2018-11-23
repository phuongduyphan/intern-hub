import AppBar from '@material-ui/core/AppBar';
import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Copyright from '@material-ui/icons/Copyright';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'
import Snackbar from '@material-ui/core/Snackbar';


const styles = theme => ({
  content: {
    display: 'flex',
    justifyContent: 'center',
  },
  footer: {
    top: 'auto',
    bottom: 0,
  },
  icon: {
    margin: 7,
  }
});

const Footer = (props) => {
  const { classes, open, onClose } = props;
  return (
    <React.Fragment>
      <AppBar position='fixed' color='inherit' className={classes.footer}>
        <Toolbar className={classes.content}>
          <Copyright color='action' className={classes.icon} /> 
          <Typography variant='h6' > Develop By IU </Typography>
        </Toolbar>
       
      </AppBar>
      <Snackbar
          color='primary'
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={open}
          onClose={onClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Regiser Success !!!</span>}
        />

    </React.Fragment>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Footer);