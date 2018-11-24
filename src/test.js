// const { User } = require('./user/User');
// const { Student } = require('./student/Student');
// const { Recruiter } = require('./recruiter/Recruiter');
// const { Skill } = require('./skill/Skill');
// const { Job } = require('./job/Job');
// const { Category } = require('./category/Category');
// const { Model } = require('../config/mysql/mysql-config');
// const { StudentSkill } = require('./studentSkill/StudentSkill');
// const { knex } = require('../config/mysql/mysql-config');
// const { StudentService } = require('./student/StudentService');
// const { JobService } = require('./job/JobService');

// async function runTest() {
//   // const students = await Student.query().where({studentId: 1});
//   // const student = students[0];
//   // console.log(student);
//   // const skills = await student.$relatedQuery('skills');
//   // console.log(skills);

//   // const recruiters = await Recruiter.query().where({recruiterId: 2});
//   // const recruiter = recruiters[0];
//   // console.log(recruiter);
//   // console.log(await recruiter.$relatedQuery('jobs'));

//   // const result = await StudentService.searchStudentWithSkills(['nodejs', 'java', 'design']);

//   const result = await JobService.searchJobWithKeywords(['frontend', 'BA', 'java', 'mysql']);
//   console.log(result);
// };

// runTest().then(() => { });

// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'severussnape0x@gmail.com',
//     pass: 'Duy78183',
//   },
// });

// const mailOptions = {
//   from: 'severussnape0x@gmail.com',
//   to: 'phuongduyphan@gmail.com',
//   subject: 'Test Intern Hub',
//   text: 'Test Intern Hubbbb',
//   html: '<p style="color:red">Test Intern Hubbb</p>',
// };

// transporter.sendMail(mailOptions, (err, info) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(info);
//   }
// });

const bcrypt = require('bcryptjs');

function hashing(userpass) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(userpass, salt, (errHash, hash) => {
        if (errHash) return reject(errHash);
        return resolve(hash);
      });
    });
  });
};

hashing('123').then((hash) => {
  console.log(hash);
});