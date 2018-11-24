import { GET_STUDENT_LIST, GET_JOB_LIST } from '../actions/type';


const initialState = {
  studentList: [],
  jobList: [],
  // listJob: {
  //   data: [],
  // }
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_STUDENT_LIST:
      return {
        ...state,
        studentList: action.payload.studentList,
      }
    case GET_JOB_LIST:
      return {
        ...state,
        jobList: action.payload.jobList,
      }
    default:
      return state;
  }
}
