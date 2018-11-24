import { GET_STUDENT_LIST, GET_JOB_LIST, GET_JOB_LIST_BY_KEYWORD } from "./type";
import axios from 'axios';


export const getStudentList = () => (dispach) => {
  axios
    .get('')
    .then(res => {
      dispach({
        type: GET_STUDENT_LIST,
        payload: {
          studentList: res.studentList,
        },
      });
    })
    .catch(err => {
      let tempErr = Object.values(err.response.data.errors);
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

export const getJobListByKeyword = () => (dispach) => {
  axios
    .post('localhost:3000/api/jobs/search', {
      "listOfKeywords": ["frontend", "BA", "java", "MySQL"]
    })
    .then(res => {
      dispach({
        type: GET_JOB_LIST_BY_KEYWORD,
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
