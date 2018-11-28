import {  ON_PUT_STUDENT_SUCCESS, ON_PUT_RECRUITER_SUCCESS, POST_JOB_SUCCEED } from "../actions/type";

const initialState = {
   registerSuccess: false,
   putStudentSuccess: false,
   jobCreated: false,
};

export default function(state = initialState, action) {
    switch(action.type) {
      case ON_PUT_STUDENT_SUCCESS:
        return {
          ...state,
          putStudentSuccess: action.payload,
        };

      case ON_PUT_RECRUITER_SUCCESS:
        return {
          ...state,
          putStudentSuccess: action.payload,
        }
      case POST_JOB_SUCCEED:
        return {
          ...state,
          jobCreated: action.payload
        };
      default:
        return state;
    }
}
