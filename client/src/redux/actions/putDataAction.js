import { GET_ERRORS, ON_PUT_STUDENT_SUCCESS, POST_JOB_SUCCEED} from "./type";
import axios from 'axios';


export const updateStudentProfile = (userId, studentProfile) => (dispach) => {
  axios
    .put(`http://localhost:5000/api/students/${userId}/info`, studentProfile)
    .then(res => {
      console.log(res);
      dispach({
        type: ON_PUT_STUDENT_SUCCESS,
        payload: {
          putStudentSuccess: true,
        },
      });
    })
    .catch(err => {
      console.log(err);

      // let tempErr = Object.values(err.response.data.errors);
      dispach({
        type: GET_ERRORS,
        payload: err,
      });
    });
}
export const postJob = (jobData) => (dispatch) => {
  axios
    .post('localhost:5000/api/recruiters/jobs', jobData)
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
