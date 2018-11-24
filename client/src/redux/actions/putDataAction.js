import { GET_ERRORS, ON_PUT_STUDENT_SUCCESS } from "./type";
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
