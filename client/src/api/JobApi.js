import axios from 'axios'
import config from '../config'

function url(path){
  return config.api +path
}

export default {
  getJobList: () => axios.get(url('/jobs')),
  getJobListWithKeyword: (keyword) => axios.post((url('/jobs/search'), {listOfKeywords: keyword})),
  getSkillList: () => axios.get(url('/skills')),
  getStudents: () => axios.get(url('/students')),
  getCategoryList: () => axios.get(url('/categories')),
  postJob: (job) => axios.post(url('/recruiters/jobs'))
}
