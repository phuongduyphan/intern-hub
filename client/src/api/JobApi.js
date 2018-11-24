import axios from 'axios'
import config from '../config'

function url(path){
  return config.api +path
}

export default {
  getJobs: () => axios.get(url('/jobs')),
  postJob: (job) => axios.post(url('/jobs')),
  getStudents: () => axios.get(url('/students'))
}
