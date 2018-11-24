import React, { } from 'react';
import Job from './Job';
import { withStyles } from '@material-ui/core/styles';
import SearchInput from '../addJob/SearchInput';

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
