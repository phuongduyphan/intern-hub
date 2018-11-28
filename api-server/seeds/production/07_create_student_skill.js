/* eslint-disable */
exports.seed = async function(knex, Promise) {
  // Deletes ALL sessions existing entries
  await knex('student_skill').del();

  await knex('student_skill').insert({
    student_id: 1,
    skill_id: 1,
  });

  await knex('student_skill').insert({
    student_id: 1,
    skill_id: 2,
  });

  await knex('student_skill').insert({
    student_id: 1,
    skill_id: 3,
  });

  await knex('student_skill').insert({
    student_id: 2,
    skill_id: 4,
  });
  
  await knex('student_skill').insert({
    student_id: 2,
    skill_id: 5,
  });
};