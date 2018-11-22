import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Work from '@material-ui/icons/Work';
import Place from '@material-ui/icons/Place';
import Money from '@material-ui/icons/AttachMoney';
import Heart from '@material-ui/icons/FavoriteBorder';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
    margin: 5
  },
  image: {
    width: 80,
    height: 80,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  icon: {
    color: '#595854',
    marginRight: 2,
    fontSize: 18,
  },
  type: {
    color: '#202bd6',
  },
  apply: {
    position: 'relative',
    top: '10%',
  }
});

const Job = (props) => {
  const { classes } = props;
  const { job } = props;
  return (
    <Paper className={classes.root}>
      <Grid container spacing={16}>
        <Grid item >
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={job.logo} />
          </ButtonBase>
        </Grid>
        <Grid item xs={10} sm container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant="h6">
                {job.title}
              </Typography>
              <Typography gutterBottom variant="body1" color="textSecondary">{job.description}</Typography>
            </Grid>

            <Grid item>
              <Grid container>
                <Grid item xs={3}>
                  <Grid container>
                    <Grid item><Work className={classes.icon}/></Grid>
                    <Grid item><Typography variant="body1" color="textSecondary">{job.company}</Typography></Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container>
                    <Grid item><Place className={classes.icon}/></Grid>
                    <Grid item><Typography variant="body1" color="textSecondary">{job.place}</Typography></Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item><Money className={classes.icon}/></Grid>
                    <Grid item><Typography variant="body1" color="textSecondary">{job.salary}</Typography></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.apply}>
            <Grid container>
              <Grid item><Heart className={classes.icon}/></Grid>
              <Grid item><Typography className={classes.type} variant="button">{job.type}</Typography></Grid>
            </Grid>
            <Button size="large" variant="contained" color="secondary" className={classes.button}>
              Apply
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

Job.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Job);
