const { StudentService } = require('./StudentService');

exports.students_get = async (req, res) => {
  try {
    const listOfStudents = await StudentService.getListOfStudents();
    res.send(listOfStudents);
  } catch (err) {
    throw err;
  }
};

exports.students_search = async (req, res) => {
  try {
    const { listOfSkills } = req.body;
    const listOfStudents = await StudentService.searchStudentBySkills(listOfSkills);
    res.send(listOfStudents);
  } catch (err) {
    throw err;
  }
};

exports.studentId_get = async (req, res) => {
  try {
    const { studentId } = req.params;
    const studentObj = { studentId };
    const returnObj = await StudentService.getStudent(studentObj);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
};

exports.studentId_info_post = async (req, res) => {
  try {
    const studentId = req.user.userId;
    const { studentMajor, studentCollege, studentDesc } = req.body;
    const student = {
      studentId,
      studentMajor,
      studentCollege,
      studentDesc,
    };

    await StudentService.createStudentInfo(student);
    res.sendStatus(200);
  } catch (err) {
    throw err;
  }
};

//TODO
exports.studentId_info_get = async (req, res) => {
  try {

  } catch (err) {
    throw err;
  }
};

//TODO
exports.students_post = async (req, res) => {
  try {

  } catch (err) {
    throw err;
  }
};

//TODO
exports.studentId_skills_get = async (req, res) => {
  try {

  } catch (err) {
    throw err;
  }
};

//TODO
exports.studentId_skills_post = async (req, res) => {
  try {

  } catch (err) {
    throw err;
  }
};