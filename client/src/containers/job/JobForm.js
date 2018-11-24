import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import JForm from '../../components/addJob/JobForm';
import { withRouter } from 'react-router-dom';
import defaultAvatar from '../../asset/avatar/default.jpg';
import axios from 'axios';
import { postJob } from '../../redux/actions/postDataAction';
import JobApi from '../../api/JobApi';

class JobForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      location: '',
      skills: [],
      categories: [],
      listOfSkills: [],
      listOfCategories: []
    };
  }

  componentDidMount() {

    JobApi.getSkillList()
      .then(res => {
        console.log(res.data);
        this.setState({ listOfSkills: res.data });
        // this.setState({ listOfSkills: res })
      })

    JobApi.getCategoryList()
      .then(res => {
        console.log(res.data);
        this.setState({ listOfCategories: res.data});
      })
  }

  onSubmitButton = (e) => {
    e.preventDefault();
    const data = this.state;
    let listOfSkillIds = data.skills.map(skill => ({
      skillId: data.listOfSkills.find(s => s.skillName.toLowerCase() === skill.toLowerCase()).skillId
    }))
    let listOfCategoryIds = data.categories.map(category => ({
      categoryId: data.listOfCategories.find(s => s.categoryName.toLowerCase() === category.toLowerCase()).categoryId
    }))

    const job = {
    	jobTitle: data.title,
    	jobDesc: data.description,
    	location: data.location,
    	listOfSkillIds,
    	listOfCategoryIds
    }

    console.log(job);
    this.props.postJob(job);
    this.props.history.push('/jobs');
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
          onSubmitButton = {this.onSubmitButton}
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

export default connect(mapStateToProps, { postJob })(withRouter(JobForm));
