import { PUT_STUDENT } from '../actions/type';


const initialState = {
  putStudentSuccess: false,
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_STUDENT_LIST:
      return {
        putStudentSuccess: true,
      }
    default:
       return state;
  }
}