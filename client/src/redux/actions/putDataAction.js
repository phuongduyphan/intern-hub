import { GET_ERRORS, ON_PUT_STUDENT_SUCCESS, ON_PUT_RECRUITER_SUCCESS, POST_JOB_SUCCEED, SET_UPDATED_STATUS } from "./type";
import axios from 'axios';


export const updateStudentProfile = (userId, studentProfile) => (dispatch) => {
  axios
    .put(`https://intern-hub.herokuapp.com/api/students/${userId}/info`, studentProfile)
    .then(res => {
      console.log(res);
      dispatch({
        type: ON_PUT_STUDENT_SUCCESS,
        payload: {
          putStudentSuccess: true,
        },
      });
      dispatch({
        type: SET_UPDATED_STATUS,
        payload: {
          updatedStatus: 1
        }
      })
    })
    .catch(err => {
      console.log(err);

      // let tempErr = Object.values(err.response.data.errors);
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
}

export const updateRecruiterProfile = (userId, recruiterProfile) => (dispatch) => {
  axios
    .put(`https://intern-hub.herokuapp.com/api/recruiters/${userId}/info`, recruiterProfile)
    .then(res => {
      console.log(res);
      dispatch({
        type: ON_PUT_RECRUITER_SUCCESS,
        payload: {
          putRecruiterSuccess: true,
        },
      });
      dispatch({
        type: SET_UPDATED_STATUS,
        payload: {
          updatedStatus: 1
        }
      });
    })
    .catch(err => {
      console.log(err);

      // let tempErr = Object.values(err.response.data.errors);
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
  }
export const postJob = (jobData) => (dispatch) => {
  axios
    .post('https://intern-hub.herokuapp.com/api/jobs', jobData)
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
