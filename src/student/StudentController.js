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

exports.studentId_info_put = async (req, res) => {
  try {
    const { userId } = req.user;
    const {
      displayName,
      email,
      phoneNumber,
      studentMajor,
      studentCollege,
      studentDesc,
    } = req.body;

    const user = {
      userId,
      displayName,
      email,
      phoneNumber,
      students: {
        studentMajor,
        studentCollege,
        studentDesc,
      },
    };

    await StudentService.updateStudentInfo(user);
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