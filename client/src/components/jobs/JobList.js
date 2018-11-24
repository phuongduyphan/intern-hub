import React, { Component } from 'react';
import Job from './Job';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
  },
})

const JobList = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      {props.jobList.map((job) => (
        <Job key={job.jobId} job={job} />
      ))}
    </div>
  )
}

// export default JobList;
export default withStyles(styles)(JobList);
