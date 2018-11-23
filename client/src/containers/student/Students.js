import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Student from '../../components/student/Students';
import { withRouter } from 'react-router-dom';
import defaultAvatar from '../../asset/avatar/default.jpg';


class StudentsContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      student: [{
        name: 'Thanh Tung',
        avatar: defaultAvatar,
        phone: '01666725437',
        email: 'tungtoitiu@gmail.com',
        college: 'International University',
        major: 'Information Technology',
        skill: ['NodeJs', 'ReactJs'],
        errors: {},
      }],
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
    const studentList = this.state.student;
   
    
    return (
      <div>
         {  
          studentList.map((student) => (
            <Student student={student} />
         ))}
      </div>
    );

  }
}

StudentsContainer.propTypes = {
  auth: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(withRouter(StudentsContainer));