import { GET_STUDENT_LIST, GET_JOB_LIST } from "./type";
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
