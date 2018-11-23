import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import JForm from '../../components/addJob/JobForm';
import { withRouter } from 'react-router-dom';
import defaultAvatar from '../../asset/avatar/default.jpg';


class JobForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      location: '',
      skills: [],
      categories: []
    };
  }

  componentDidMount() {
  }

  onChangeText = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  immutableDelete (arr, index) {
    return arr.slice(0,index).concat(arr.slice(index+1))
  }

  handleAddSkill = (chip) => {
    this.setState({ skills: [...this.state.skills, chip]});
  }

  handleDeleteSkill = (chip, index) => {
    this.setState({
      skills: this.immutableDelete(this.state.skills, index)
    });
  }

  handleAddCategory = (chip) => {
    this.setState({ categories: [...this.state.categories, chip]});
  }

  handleDeleteCategory = (chip, index) => {
    this.setState({
      categories: this.immutableDelete(this.state.categories, index)
    });
  }


  postButton = (e) => {
    e.preventDefault();
  }


  render() {
    const studentList = this.state.student;


    return (
      <div>
        <JForm
          data = {this.state}
          onChangeText = {this.onChangeText}
          handleAddSkill = {this.handleAddSkill}
          handleDeleteSkill = {this.handleDeleteSkill}
          handleAddCategory = {this.handleAddCategory}
          handleDeleteCategory = {this.handleDeleteCategory}
          postButton = {this.postButton}
        />
      </div>
    );

  }
}

JobForm.propTypes = {
  auth: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(withRouter(JobForm));
