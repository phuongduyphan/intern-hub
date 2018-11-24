import React, { Component } from 'react';
import Job from '../../components/jobs/Job';
import JobList from '../../components/jobs/JobList';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ChipInput from 'material-ui-chip-input';
import SearchInput from '../../components/addJob/SearchInput'
import { getJobList, getJobListWithKeyword } from '../../redux/actions/getDataAction';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';



class JobListContainer extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      li: [
        {
          jobId: 0,
          logo: 'https://index.tnwcdn.com/images/9794fd32b7b694d7720d2e655049051b78604f09.jpg',
          jobTitle: 'Software Engineering',
          jobDesc: 'Do things',
          recruiter: 'Microsoft',
          location: 'District 1',
          salary: '5.000.000 VND',
          skills: [
            {
              "skillId": 2,
              "skillName": "NodeJs"
            },
            {
              "skillId": 3,
              "skillName": "Design"
            }
          ],
          type: 'fulltime',
          duration: '3 months'
        },
      ],
    }
  }

  componentDidMount() {
    console.log('mount');
    this.props.getJobList();
  }

  onSearchButton() {
    const keyword={};
    this.props.getJobListWithKeyword(keyword);
  }

  render() {
    console.log(this.props.jobList);
    return (
      <div className={' myJobList'} >
        <h1>All Jobs</h1>
        <SearchInput />
        <JobList jobList={this.props.jobList} />

      </div>
    )
  }
}

// export default JobList
export default connect((state) => ({
  jobList: state.data.jobList,
  isSearching: state.data.isSearching
}), { getJobList, getJobListWithKeyword })(withRouter(JobListContainer));
