import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import StudentProfile from '../../components/student/StudentProfile';
import { withRouter } from 'react-router-dom';
import {updateStudentProfile} from '../../redux/actions/putDataAction';

class StudentProfileContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      college: '',
      studentDesc: '',
      major: '',
      skills: [],
      errors: {},
    };
  }

  componentDidMount() {
    if(!this.props.auth.isAuthenticate) {

    }
  }

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


  onChangeText = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  saveChangeButton = (e) => {
    e.preventDefault();

    const userId = this.props.auth.user.userId;

    const studentProfile = {
      email: this.state.email,
      phoneNumber: this.state.phone,
      studentMajor: this.state.major,
      studentCollege: this.state.college,
      studentDesc: this.state.studentDesc,
      skills: this.state.skills,
    };

    console.log('studentP',studentProfile);


    this.props.updateStudentProfile(userId, studentProfile);
  };


  render() {

    return (
      <div>
        <StudentProfile
          data={this.state}
          onChangeText = {this.onChangeText}
          saveChangeButton={this.saveChangeButton}
          handleAddSkill = {this.handleAddSkill}
          handleDeleteSkill = {this.handleDeleteSkill}
      />
      </div>
    );

  }
}

StudentProfileContainer.propTypes = {
  auth: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, {updateStudentProfile})(withRouter(StudentProfileContainer));
