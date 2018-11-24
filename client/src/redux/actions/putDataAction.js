import { GET_ERRORS, ON_PUT_STUDENT_SUCCESS, ON_PUT_RECRUITER_SUCCESS, POST_JOB_SUCCEED } from "./type";
import axios from 'axios';


export const updateStudentProfile = (userId, studentProfile) => (dispach) => {
  axios
    .put(`https://rocky-crag-37789.herokuapp.com/api/students/${userId}/info`, studentProfile)
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

export const updateRecruiterProfile = (userId, recruiterProfile) => (dispach) => {
  axios
    .put(`https://rocky-crag-37789.herokuapp.com/api/recruiters/${userId}/info`, recruiterProfile)
    .then(res => {
      console.log(res);
      dispach({
        type: ON_PUT_RECRUITER_SUCCESS,
        payload: {
          putRecruiterSuccess: true,
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
    .post('https://rocky-crag-37789.herokuapp.com/api/jobs', jobData)
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
