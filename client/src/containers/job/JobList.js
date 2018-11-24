import React, { Component } from 'react';
import Job from '../../components/jobs/Job';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ChipInput from 'material-ui-chip-input';
import SearchInput from '../../components/addJob/SearchInput'



class JobList extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      jobList: [
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
          salary: '5.000.000 VND',
          type: 'fulltime'
        },
      ],
    }
  }

  render() {
    const { jobList } = this.state;
    return (
      <div className={'myJobList'} >
        <h1>All Jobs</h1>
        <SearchInput />
          
        {jobList.map((job) => (
          <Job job={job} />
        ))}
      </div>
    )
  }
}

// export default JobList;
export default JobList;
