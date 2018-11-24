import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import StudentProfile from '../../components/student/StudentProfile';
import { withRouter } from 'react-router-dom';

class StudentProfileContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      college: '',
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
  }


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

export default connect(mapStateToProps)(withRouter(StudentProfileContainer));
