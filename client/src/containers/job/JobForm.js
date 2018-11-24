import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import JForm from '../../components/addJob/JobForm';
import { withRouter } from 'react-router-dom';
import defaultAvatar from '../../asset/avatar/default.jpg';
import axios from 'axios';
import { postJob } from '../../redux/actions/postDataAction';

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
    // this.setState({ listOfSkills: [1,2,3]});
    const seedSkills = [
      {
        "skillId": 1,
        "skillName": "Java"
      },
      {
        "skillId": 2,
        "skillName": "NodeJs"
      },
      {
        "skillId": 3,
        "skillName": "Design"
      },
      {
        "skillId": 4,
        "skillName": "nodejs"
      },
      {
        "skillId": 5,
        "skillName": "mysql"
      },
      {
        "skillId": 6,
        "skillName": ".NET"
      },
      {
        "skillId": 7,
        "skillName": "J2EE"
      }
    ];
    const seedCategories = [
      {
        "categoryId": 1,
        "categoryName": "fullstack developer"
      },
      {
        "categoryId": 2,
        "categoryName": "tester"
      },
      {
        "categoryId": 3,
        "categoryName": "backend"
      },
      {
        "categoryId": 4,
        "categoryName": "frontend"
      },
      {
        "categoryId": 5,
        "categoryName": "BA"
      }
    ];
    this.setState({ listOfSkills: seedSkills });
    this.setState({ listOfCategories: seedCategories })

    axios.get('localhost:5000/api/skills')
      .then(res => {
        const seed = [
          {
            "skillId": 1,
            "skillName": "Java"
          },
          {
            "skillId": 2,
            "skillName": "NodeJs"
          },
          {
            "skillId": 3,
            "skillName": "Design"
          },
          {
            "skillId": 4,
            "skillName": "nodejs"
          },
          {
            "skillId": 5,
            "skillName": "mysql"
          },
          {
            "skillId": 6,
            "skillName": ".NET"
          },
          {
            "skillId": 7,
            "skillName": "J2EE"
          }
        ]
        console.log(res);
        this.setState({ listOfSkills: res });
        // this.setState({ listOfSkills: res })
      })

    axios.get('localhost:5000/api/categories')
      .then(res => {
        this.setState({ listOfCategories: res});
      })
  }

  onSubmitButton = (e) => {
    e.preventDefault();
    const data = this.state;
    let listOfSkillIds = data.skills.map(skill => ({
      skillId: data.listOfSkills.find(s => s.skillName === skill).skillId
    }))
    let listOfCategoryIds = data.categories.map(category => ({
      categoryId: data.listOfCategories.find(s => s.categoryName === category).categoryId
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
