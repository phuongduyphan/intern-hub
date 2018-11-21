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
  const list = [
    {
      id: 0,
      logo: 'https://index.tnwcdn.com/images/9794fd32b7b694d7720d2e655049051b78604f09.jpg',
      title: 'Software Engineering',
      description: 'Do things',
      company: 'Microsoft',
      place: 'District 1',
      salary: '5.000.000 VND',
      type: 'fulltime'
    },
    {
      id: 0,
      logo: 'https://index.tnwcdn.com/images/9794fd32b7b694d7720d2e655049051b78604f09.jpg',
      title: 'Software Engineering',
      description: 'Do things',
      company: 'Microsoft',
      place: 'District 1',
      salary: '5.000.000 VND',
      type: 'fulltime'
    },
    {
      id: 0,
      logo: 'https://index.tnwcdn.com/images/9794fd32b7b694d7720d2e655049051b78604f09.jpg',
      title: 'Software Engineering',
      description: 'Do things',
      company: 'Microsoft',
      place: 'District 1',
      salary: '5.000.000 VND',
      type: 'fulltime'
    },
    {
      id: 0,
      logo: 'https://index.tnwcdn.com/images/9794fd32b7b694d7720d2e655049051b78604f09.jpg',
      title: 'Software Engineering',
      description: 'Do things',
      company: 'Microsoft',
      place: 'District 1',
      salary: '5.000.000 VND',
      type: 'fulltime'
    },
    {
      id: 0,
      logo: 'https://index.tnwcdn.com/images/9794fd32b7b694d7720d2e655049051b78604f09.jpg',
      title: 'Software Engineering',
      description: 'Do things',
      company: 'Microsoft',
      place: 'District 1',
      salary: '5.000.000 VND',
      type: 'fulltime'
    },

  ]

  return (
    <div className={classes.root}>
      {list.map((job) => (
        <Job job={job} />
      ))}
    </div>
  )
}

// export default JobList;
export default withStyles(styles)(JobList);
