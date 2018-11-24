import React, { } from 'react';
import Job from './Job';
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
      type: 'fulltime',
      duration: '3 months'
    },
    {
      id: 0,
      logo: 'https://index.tnwcdn.com/images/9794fd32b7b694d7720d2e655049051b78604f09.jpg',
      title: 'Software Engineering',
      description: 'Do things',
      company: 'Microsoft',
      place: 'District 1',
      salary: '3.000.000 VND',
      type: 'parttime',
      duration: '1 months'
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
      description: 'lz duy',
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
    <div className={classes.root +' myJobList'}>
      {list.map((job) => (
        <Job job={job} />
      ))}
    </div>
  )
}

// export default JobList;
export default withStyles(styles)(JobList);
