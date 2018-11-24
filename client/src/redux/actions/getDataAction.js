import { GET_STUDENT_LIST, GET_JOB_LIST, GET_ERRORS } from "./type";
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

export const getJobList = () => async (dispach) => {
  try {
    const {data} = await JobApi.getJobs();
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
