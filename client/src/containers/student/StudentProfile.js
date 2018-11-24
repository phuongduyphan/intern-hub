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
      skill: '',
      errors: {},
    };
  }

  componentDidMount() {
    if(!this.props.auth.isAuthenticate) {

    }
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
