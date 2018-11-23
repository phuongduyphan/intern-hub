import { GET_STUDENT_LIST, GET_JOB_LIST } from '../actions/type';


const initialState = {
  listStudent: {},
  listJob: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_STUDENT_LIST:
    return {
      ...state,
      listStudent: action.payload,
    }
    case GET_JOB_LIST:
      return {
        ...state,
        listJob: action.payload,
      }
    default:
      return state;
  }
}