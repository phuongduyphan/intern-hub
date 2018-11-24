import React, { Component } from 'react';
import Job from '../../components/jobs/Job';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { getJobList } from '../../redux/actions/getDataAction';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';


const root = {
  justifyContent: 'center'
}

class JobList extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      jobList: [
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
    axios.get('localhost:5000/api/jobs')
    .then(res => {
      console.log(res);
      this.setState({jobList: res})
    })
  }

  componentWillReceiveProps(props) {
    if(props.data.listJob) {
      this.setState({jobList: props.data.listJob});
    }
  }

  render() {
    const { jobList } = this.state;
    return (
      <div className={root}>
        {jobList.map((job) => (
          <Job key={job.jobId} job={job} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
})


// export default JobList;
export default connect(mapStateToProps, { getJobList })(withRouter(JobList));
