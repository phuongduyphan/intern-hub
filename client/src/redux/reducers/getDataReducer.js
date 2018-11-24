import { GET_STUDENT_LIST,
         GET_JOB_LIST,
         GET_JOB_LIST_WITH_KEYWORD ,
         GET_SKILL_LIST,
         GET_CATEGORY_LIST,
         GET_STUDENT_LIST_WITH_KEYWORD } from '../actions/type';


const initialState = {
  studentList: [],
  jobList: [],
  categoryList: [],
  skillList: [],
  isSearching: false,
  isJobLoading: false,
  isStudentLoading: false
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
        isStudentLoading: true
      }
    case GET_STUDENT_LIST_WITH_KEYWORD:
      return {
        ...state,
        studentList: action.payload.studentList,
      }
    case GET_JOB_LIST:
      return {
        ...state,
        jobList: action.payload.jobList,
        isJobLoading: true
      }
    case GET_JOB_LIST_WITH_KEYWORD:
      return {
        ...state,
        jobList: action.payload.jobList,
        isSearching: true,
      }
    case GET_SKILL_LIST:
      return {
        ...state,
        skillList: action.payload.skillList,
      }
    case GET_CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.payload.categoryList,
      }
    default:
      return state;
  }
}
