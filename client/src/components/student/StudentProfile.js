import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button' ;
import ChipInput from 'material-ui-chip-input'


const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '90',
  },
  typo: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing.unit * 4 ,
    marginLeft: theme.spacing.unit * 4 ,
    marginRight: theme.spacing.unit * 4
  },
  seconTypo: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: theme.spacing.unit * 1 ,
    marginBottom: theme.spacing.unit * 5
  },
  textRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'column wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 2,
  },
  button: {
    marginTop: theme.spacing.unit * 3,
  },
  grid: {
    height: '80vh',
  }

});

const StudentProfile = (props) => {
  const { classes, onChangeText, data, saveChangeButton, handleAddSkill, handleDeleteSkill} = props;



  return (
    <React.Fragment >
      <div className={classes.root+ ' myStudentProfile'}>
        <Grid container className={classes.grid} justify='center' alignItems='center'>
          <Paper className={classes.paper}>
            <Typography className={classes.typo} variant='display1' color='primary'> Update Student Profile </Typography>
            <Typography className={classes.seconTypo} variant='caption' color='textSecondary' align='right'> * Please update your info to get your future intern ! </Typography>
            <div className={classes.textRow}>
              <FormControl className={classes.textField}>
                  <InputLabel>Email</InputLabel>
                    <Input
                      autoFocus
                      name='email'
                      value={data.email}
                      onChange={onChangeText}
                    />
              </FormControl>

              <FormControl className={classes.textField}>
                  <InputLabel>Phone</InputLabel>
                    <Input
                      autoFocus
                      name='phone'
                      value={data.phone}
                      onChange={onChangeText}
                    />
              </FormControl>
            </div>



            <FormControl className={classes.textField}>
                <InputLabel>College</InputLabel>
                  <Input
                    autoFocus
                    name='college'
                    value={data.college}
                    onChange={onChangeText}
                  />
            </FormControl>

            <FormControl className={classes.textField}>
                <InputLabel>Your Description</InputLabel>
                  <Input
                    autoFocus
                    name='studentDesc'
                    value={data.studentDesc}
                    onChange={onChangeText}
                  />
            </FormControl>

            <FormControl className={classes.textField}>
                <InputLabel>Your Major</InputLabel>
                  <Input
                    autoFocus
                    name='major'
                    value={data.major}
                    onChange={onChangeText}
                  />
            </FormControl>

            <FormControl className={classes.textField}>
              <ChipInput
                label="Skills"
                placeholder="Mongo, Jav, ..."
                value={data.skills}
                onAdd={(chip) => handleAddSkill(chip)}
                onDelete={(chip, index) => handleDeleteSkill(chip, index)}
              />
            </FormControl>
            <Button onClick={saveChangeButton} className={classes.button} variant='contained' color='primary'> Save Change </Button>
          </Paper>
        </Grid>
      </div>
    </React.Fragment>
  );
}

StudentProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentProfile);
