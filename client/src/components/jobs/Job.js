import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Chip from '@material-ui/core/Chip';
import Work from '@material-ui/icons/Work';
import Place from '@material-ui/icons/Place';
import Money from '@material-ui/icons/AttachMoney';
import Heart from '@material-ui/icons/FavoriteBorder';
import DateRange from '@material-ui/icons/DateRange';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    margin: 5,
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
    
  },
  type: {
    color: '#202bd6',
  },
  apply: {
    position: 'relative',
    top: '10%',
  },
  itemList:{
    textAlign:'center',
    margin:'auto'
  },
  chip: {
    marginRight: 5,
  }
});

const Job = (props) => {
  const { classes } = props;
  const { job } = props;
  return (
    <Paper className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={2} >
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={job.logo} />
          </ButtonBase>
        </Grid>
        <Grid item xs={10}  container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant="h6">
                {job.jobTitle}
              </Typography>
              <Typography gutterBottom variant="body1" color="textSecondary">{job.jobDesc}</Typography>
              <div>
                {
                  job.skills.map((skill, index) => <Chip key={index} className={classes.chip} label={skill.skillName} color="primary" variant="outlined"/>)
                }
              </div>
            </Grid>

            <Grid item >
              <Grid container>
                <Grid item xs={3}>
                  <Grid container >
                    <div className={classes.itemList}>
                    <Work className={classes.icon}/>
                    <Typography variant="body1" color="textSecondary" >{job.company}</Typography>
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container>
                  <div className={classes.itemList}>
                    <Place className={classes.icon}/>
                    <Typography variant="body1" color="textSecondary">{job.place}</Typography>
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container>
                  <div className={classes.itemList}>
                    <Money className={classes.icon}/>
                    <Typography variant="body1" color="textSecondary">{job.salary}</Typography>
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container>
                  <div className={classes.itemList}>
                    <DateRange className={classes.icon}/>
                    <Typography variant="body1" color="textSecondary">{job.duration}</Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.apply}>
            <Grid container>
              <Heart className={classes.icon}/>
              <Typography className={classes.type} variant="button">{job.type}</Typography>
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
