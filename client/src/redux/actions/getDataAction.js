import { GET_STUDENT_LIST, GET_JOB_LIST, GET_ERRORS } from "./type";
import axios from 'axios';


export const getStudentList = () => async (dispach) => {
  axios
    .get(`http://localhost:5000/api/students/`)
    .then(res => {
      console.log(res.data);
      
      dispach({
        type: GET_STUDENT_LIST,
        payload: {
          studentList: res.data,
        },
      });
    })
    .catch(err => {
      console.log(err);
      
      let tempErr = null;
      dispach({
        type: GET_ERRORS,
        payload: tempErr,
      });
    });
}

export const getJobList = () => (dispach) => {
  axios.get('localhost:5000/api/jobs')
  .then(res => {
    dispach({
      type: GET_JOB_LIST,
      payload: {
        jobList: res,
      },
    });
  })
  .catch(err => {
    let tempErr = Object.values(err.response.data.errors);
    dispach({
      type: GET_ERRORS,
      payload: tempErr,
    });
  })
}
