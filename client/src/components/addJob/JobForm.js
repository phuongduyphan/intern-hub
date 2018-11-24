import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
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
  },
});

const districts = [
  'District 1',
  'District 2',
  'District 3',
  'District 4',
  'District 5',
  'District 6',
  'District 7',
  'District 8',
  'District 9',
  'District 10',
  'Binh Thanh',
  'Binh Tan',
  'Tan Phu',
  'Tan Binh',

]

const JobForm = (props) => {
  const { classes,
    onChangeText,
    data,
    handleAddSkill,
    handleDeleteSkill,
    handleAddCategory,
    handleDeleteCategory,
    onSubmitButton } = props;
  return (
    <React.Fragment >
      <div className={classes.root}>
        <Grid container className={classes.grid} justify='center' alignItems='center'>
          <Paper className={classes.paper}>
            <Typography className={classes.typo} variant='display1' color='primary'> Post Your Job </Typography>
            <div className={classes.textRow}>
              <FormControl className={classes.textField}>
                  <InputLabel>Job Title</InputLabel>
                    <Input
                      autoFocus
                      name='title'
                      value={data.title}
                      onChange={onChangeText}
                    />
              </FormControl>
            </div>

            <FormControl className={classes.textField}>
                <InputLabel>Description</InputLabel>
                  <Input
                    type='textarea'
                    multiline
                    name='description'
                    value={data.description}
                    onChange={onChangeText}
                  />
            </FormControl>
            <FormControl className={classes.textField}>
              <InputLabel htmlFor="location">Location</InputLabel>
              <Select
                value={data.location}
                onChange={onChangeText}
                inputProps={{
                  name: 'location',
                  id: 'location',
                }}
              >
                {
                  districts.map(district => (
                    <MenuItem value={district}>{district}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
            <FormControl className={classes.textField}>
                <ChipInput
                  label="Skills"
                  placeholder="React, Mongo, ..."
                  value={data.skills}
                  onAdd={(chip) => handleAddSkill(chip)}
                  onDelete={(chip, index) => handleDeleteSkill(chip, index)}
                />
            </FormControl>
            <FormControl className={classes.textField}>
                <ChipInput
                  label="Categories"
                  placeholder="Front-end, Back-end, ..."
                  value={data.categories}
                  onAdd={(chip) => handleAddCategory(chip)}
                  onDelete={(chip, index) => handleDeleteCategory(chip, index)}
                />
            </FormControl>

            <Button onClick={onSubmitButton} className={classes.button} variant='contained' color='primary'> Save Change </Button>
          </Paper>
        </Grid>
      </div>
    </React.Fragment>
  );
}

JobForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobForm);
