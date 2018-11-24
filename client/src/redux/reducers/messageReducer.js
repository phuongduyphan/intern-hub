import {  ON_REGISTER_SUCCESS, ON_PUT_STUDENT_SUCCESS, ON_PUT_RECRUITER_SUCCESS } from "../actions/type";

const initialState = {
   registerSuccess: false,
   putStudentSuccess: false,
   
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
        };
      default:
        return state;
    }
}