import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import RecruiterComponent from '../../components/recruiter/RecruiterComponent';
import { withRouter } from 'react-router-dom';
import {updateRecruiterProfile} from '../../redux/actions/putDataAction';

class StudentProfileContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      company: '',
      phone: '',
      email: '',
      recruiterAddress: '',
      recruiterDesc: '',
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

    const recruiterProfile = {
      email: this.state.email,
      phoneNumber: this.state.phone,
      recruiterAddress: this.state.recruiterAddress,
      company: this.state.company,
      recruiterDesc: this.state.recruiterDesc,
    };

    console.log('studentP',recruiterProfile);


    this.props.updateRecruiterProfile(userId, recruiterProfile);
    this.props.history.push("/add-job");
  };


  render() {

    return (
      <div>
        <RecruiterComponent
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

export default connect(mapStateToProps, {updateRecruiterProfile})(withRouter(StudentProfileContainer));
