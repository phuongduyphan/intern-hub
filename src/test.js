const { User } = require('./user/User');
const { Student } = require('./student/Student');
const { Recruiter } = require('./recruiter/Recruiter');
const { Skill } = require('./skill/Skill');
const { Job } = require('./job/Job');
const { Category } = require('./category/Category');
const { Model } = require('../config/mysql/mysql-config');
const { StudentSkill } = require('./studentSkill/StudentSkill');
const { knex } = require('../config/mysql/mysql-config');
const { StudentService } = require('./student/StudentService');
const { JobService } = require('./job/JobService');

async function runTest() {
  // const students = await Student.query().where({studentId: 1});
  // const student = students[0];
  // console.log(student);
  // const skills = await student.$relatedQuery('skills');
  // console.log(skills);

  // const recruiters = await Recruiter.query().where({recruiterId: 2});
  // const recruiter = recruiters[0];
  // console.log(recruiter);
  // console.log(await recruiter.$relatedQuery('jobs'));

  // const result = await StudentService.searchStudentWithSkills(['nodejs', 'java', 'design']);

  const result = await JobService.searchJobWithKeywords(['frontend', 'BA', 'java', 'mysql']);
  console.log(result);
};

runTest().then(() => { });