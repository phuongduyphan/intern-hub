import { GET_ERRORS, CREATE_ACCOUNT_SUCCESS, SET_CURRENT_USER } from "./type";
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
// Register
export const registerUser = (userData) => (dispach) => {
  axios
    .post('https://rocky-crag-37789.herokuapp.com/api/users/register', userData)
    .then(res => {
      dispach({
        type: CREATE_ACCOUNT_SUCCESS,
        payload: {
         
        },
      });
    })
    .catch(err => {
      console.log(err);
    })
}


// Login
export const loginUser = (userData) => (dispach) => {
  axios.post('https://rocky-crag-37789.herokuapp.com/api/users/login', userData)
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
