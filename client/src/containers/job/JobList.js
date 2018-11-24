import React, { Component } from 'react';
import Job from '../../components/jobs/Job';
import JobList from '../../components/jobs/JobList';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { getJobList } from '../../redux/actions/getDataAction';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';


const root = {
  justifyContent: 'center'
}

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
    console.log('didmount');
    this.props.getJobList()
  }

  render() {
    console.log(this.props.jobList);
    return (
      <div className={root}>
        <JobList jobList={this.props.jobList} />
      </div>
    )
  }
}

// export default JobList
export default connect((state) => ({
  jobList: state.data.jobList,
}), { getJobList })(withRouter(JobList));
