const { POST_JOB_SUCCEED } from '../actions/type';

const initialState = {
  jobCreated: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_JOB_SUCCEED:
      return action.payload;
    default:
      return state
  }
}
