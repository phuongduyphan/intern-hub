import { GET_ERRORS, CREATE_ACCOUNT_SUCCESS, SET_CURRENT_USER } from "./type";
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
// Register
export const registerUser = (userData) => (dispach) => {
  axios
    .post('http://localhost:5000/api/users/register', userData)
    .then(res => {
      dispach({
        type: CREATE_ACCOUNT_SUCCESS,
        payload: {
          isRegisterSuccess: true,
        },
      });
    })
    .catch(err => {
      // let tempErr = Object.values(err.response.data.errors);    
      let tempErr = null;
      dispach({
        type: GET_ERRORS, 
        payload: tempErr,
      });
      console.log(err);
      
    });
}


// Login
export const loginUser = (userData) => (dispach) => {
  axios.post('http://localhost:5000/api/users/login', userData) 
  .then(res => {
    // save to local storage
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    const decoded = jwt_decode(token);
    console.log('decode', decoded);
    
    // set current user
    dispach(setCurrentUser(decoded));
  })
  .catch(err => {
    console.log(err);
    let tempErr = Object.values(err.response.data.errors);    
    dispach({
      type: GET_ERRORS,
      payload: tempErr,
    })
  })
}


export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  }
}

// user log out
export const logOutUser = () => (dispach) => {
  localStorage.removeItem('jwtToken');
  // remove auth header for future req
  setAuthToken(false);
  // set current to empty object => is authenticate = false
  dispach(setCurrentUser({}));
}