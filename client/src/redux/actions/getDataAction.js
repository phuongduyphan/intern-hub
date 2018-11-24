import { GET_STUDENT_LIST,
          GET_JOB_LIST,
          GET_JOB_LIST_WITH_KEYWORD,
          GET_ERRORS,
          GET_STUDENT_LIST_WITH_KEYWORD} from "./type";
import JobApi from '../../api/JobApi'
import axios from 'axios'

export const getStudentList = () => async (dispach) => {
  try {
    const {data} = await JobApi.getStudents();
    console.log(data);
    dispach({
      type: GET_STUDENT_LIST,
      payload: {
        studentList: data,
      },
    });
  } catch(e) {
    console.log(e)
  }
}

export const getStudentListWithKeyword = (keyword) => async (dispatch) => {
  try {
    console.log('get keyword', keyword);
    const {data} = await axios.post('https://rocky-crag-37789.herokuapp.com/api/students/search', {
      listOfSkills: keyword,
    })
    console.log(data);
    dispatch({
      type: GET_STUDENT_LIST_WITH_KEYWORD,
      payload: {
        studentList: data,
      },
    });
  } catch (e) {
    console.log(e);
  }
}


export const getJobList = () => async (dispach) => {
  try {
    const {data} = await JobApi.getJobList();
    console.log(data);
    dispach({
      type: GET_JOB_LIST,
      payload: {
        jobList: data,
      },
    });
  } catch(e) {
    console.log(e)
  }
}

export const getJobListWithKeyword = (keyword) => async (dispatch) => {
  try {
    console.log('get keyword', keyword);
    const {data} = await axios.post('https://rocky-crag-37789.herokuapp.com/api/jobs/search', {
      listOfKeywords: keyword,
    })
    // const {data} = await JobApi.getJobListWithKeyword(keyword);
    dispatch({
      type: GET_JOB_LIST_WITH_KEYWORD,
      payload: {
        jobList: data,
      },
    });
  } catch (e) {
  }
}
