import { POST_JOB_SUCCEED, GET_ERRORS } from './type';
import axios from 'axios';

export const postJob = (jobData) => (dispatch) => {
  axios
    .post('http://localhost:5000/api/recruiters/jobs', jobData)
    .then(res => {
      dispatch({
        type: POST_JOB_SUCCEED,
        payload: {
          jobCreated: true,
        }
      })
    })
    .catch(err => {
      // let tempErr = Object.values(err.response.data.errors);
      let tempErr = null;
      dispatch({
        type: GET_ERRORS,
        payload: tempErr,
      });
      console.log(err);
      });
}
