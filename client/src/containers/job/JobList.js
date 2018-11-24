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
import LinearProgress from '@material-ui/core/LinearProgress';



class JobListContainer extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      searchInput: [],
    }
    this.onSearchButton = this.onSearchButton.bind(this);
    this.handleAddChip = this.handleAddChip.bind(this);
  }

  componentDidMount() {
    console.log('mount');
    this.props.getJobList();
  }

  handleAddChip = chip => {
    console.log('add');
    console.log(chip);
    this.setState({ searchInput: [...this.state.searchInput, chip] });
    console.log(this.state);
  }


  immutableDelete (arr, index){
      return arr.slice(0,index).concat(arr.slice(index+1))
  }

  handleDeleteChip = (chip, index) => {
    this.setState({
      searchInput: this.immutableDelete(this.state.searchInput, index)
    });
  }

  onSearchButton() {
    const keyword = this.state.searchInput;
    if(keyword.length>0) {
      console.log(keyword);
      this.props.getJobListWithKeyword(keyword);
    } else {
      this.props.getJobList();
    }
  }

  render() {
    return (
      <div className={' myJobList'} >
      {
        !this.props.isJobLoading ?
          <LinearProgress /> :
          <div>
            <h1>All Jobs</h1>
            <SearchInput
              onSearchButton = {this.onSearchButton}
              searchInput = {this.state.searchInput}
              handleAddChip = {this.handleAddChip}
              handleDeleteChip = {this.handleDeleteChip}
            />
            <JobList jobList={this.props.jobList} />
          </div>

        }
      </div>
    )
  }
}

// export default JobList
export default connect((state) => ({
  jobList: state.data.jobList,
  isJobLoading: state.data.isJobLoading,
  isSearching: state.data.isSearching
}), { getJobList, getJobListWithKeyword })(withRouter(JobListContainer));
