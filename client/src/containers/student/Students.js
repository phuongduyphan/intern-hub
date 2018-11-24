import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Student from '../../components/student/Students';
import { withRouter } from 'react-router-dom';
import defaultAvatar from '../../asset/avatar/default.jpg';
import { getStudentList, getStudentListWithKeyword } from '../../redux/actions/getDataAction';
import SearchInput from '../../components/addJob/SearchInput'
import LinearProgress from '@material-ui/core/LinearProgress';

class StudentsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: [],
    }
    this.onSearchButton = this.onSearchButton.bind(this);
    this.handleAddChip = this.handleAddChip.bind(this);
  }

  componentDidMount() {
    this.props.getStudentList();
  }

  handleAddChip = chip => {
    this.setState({ searchInput: [...this.state.searchInput, chip] });
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
      this.props.getStudentListWithKeyword(keyword);
    } else {
      this.props.getStudentList();
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
      <div className="myStudents">
         {
           !this.props.isStudentLoading ?
             <LinearProgress /> :
             <div>
               <h1>All Students</h1>
               <SearchInput
                 onSearchButton = {this.onSearchButton}
                 searchInput = {this.state.searchInput}
                 handleAddChip = {this.handleAddChip}
                 handleDeleteChip = {this.handleDeleteChip}
               />
               {
                this.props.studentList.map((student) => (
                  <Student key={ student.studentId } avatar={defaultAvatar} student={student} />
               ))}
             </div>
           }
      </div>
    );

  }
}

StudentsContainer.propTypes = {
  auth: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => ({
  studentList: state.data.studentList,
  isStudentLoading: state.data.isStudentLoading,
  name: state.auth.user.username,
});

export default connect(mapStateToProps, { getStudentList, getStudentListWithKeyword })(withRouter(StudentsContainer));
