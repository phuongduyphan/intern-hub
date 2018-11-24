import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar'
import Work from '@material-ui/icons/Work';
import Email from '@material-ui/icons/Email';
import Place from '@material-ui/icons/Place';
import Chip from '@material-ui/core/Chip';

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
  },
  chip: {
    marginTop: theme.spacing.unit / 2,
    marginRight: theme.spacing.unit / 2,
  },
});

const Students = (props) => {
  const { classes, student, avatar } = props;

  const renderSkill = (
    <div>
      {student.skills.map(skill => {
          let icon = null;
          return (
            <Chip
              color='primary'
              icon={icon}
              label={skill.skillName}
              className={classes.chip}
            />
          );
        })}
    </div>
  );
 
  return (
    <Grid container direction='row' alignContent='center' justify='center'>
      <Paper className={classes.root }>
        <Grid container spacing={16}>
          <Grid item >
            <Avatar src={avatar} className={classes.image} />
          </Grid>
          <Grid item xs={10} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography variant='headline' color='primary'>{student.users.displayname}</Typography>
                {renderSkill}
              </Grid>

              <Grid item>
                <Grid container>
                  <Grid item xs={4}>
                    <Grid container>
                      <Grid item><Work className={classes.icon}/></Grid>
                      <Grid item><Typography variant="body1" color="textSecondary">{student.studentCollege}</Typography></Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container>
                      <Grid item><Place className={classes.icon}/></Grid>
                      <Grid item><Typography variant="body1" color="textSecondary">{student.studentMajor}</Typography></Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container>
                      <Grid item><Email className={classes.icon}/></Grid>
                      <Grid item><Typography variant="body1" color="textSecondary">{student.email}</Typography></Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.apply}>
              <Grid container>
                <Grid item><Typography className={classes.type} variant="button">{student.type}</Typography></Grid>
              </Grid>
              <Button size="large" variant="contained" color="primary" className={classes.button}>
                Invite
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>  
  );
}

Students.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Students);
