import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Student from '../../components/student/Students';
import { withRouter } from 'react-router-dom';
import defaultAvatar from '../../asset/avatar/default.jpg';
import { getStudentList } from '../../redux/actions/getDataAction';


class StudentsContainer extends Component {
  
  constructor(props) {
    super(props);
   
    
  }

  componentDidMount() {
    this.props.getStudentList();
  }

  

  onChangeText = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  saveChangeButton = (e) => {
    e.preventDefault();
    
  }


  render() {
    const studentList =  this.props.data.studentList;
    return (
      <div>
         {  
          studentList.map((student) => (
            <Student avatar={defaultAvatar} student={student} />
         ))}
      </div>
    );

  }
}

StudentsContainer.propTypes = {
  auth: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => ({
  data: state.data, 
  name: state.auth.user.username,
});

export default connect(mapStateToProps, { getStudentList })(withRouter(StudentsContainer));