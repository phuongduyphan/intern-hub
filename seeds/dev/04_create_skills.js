/* eslint-disable */
exports.seed = async function(knex, Promise) {
  // Deletes ALL sessions existing entries
  await knex('skills').del();

  await knex('skills').insert({
    skill_id: 1,
    skill_name: 'NodeJs',
  });

  await knex('skills').insert({
    skill_id: 2,
    skill_name: 'Java',
  });

  await knex('skills').insert({
    skill_id: 3,
    skill_name: '.NET',
  });

  await knex('skills').insert({
    skill_id: 4,
    skill_name: 'MySQL',
  });

  await knex('skills').insert({
    skill_id: 5,
    skill_name: 'MongoDB',
  });

  await knex('skills').insert({
    skill_id: 6,
    skill_name: 'UI Design',
  });

  await knex('skills').insert({
    skill_id: 7,
    skill_name: 'Architecture Design',
  });

  await knex('skills').insert({
    skill_id: 8,
    skill_name: 'C#',
  });

  await knex('skills').insert({
    skill_id: 9,
    skill_name: 'Linux',
  });

  await knex('skills').insert({
    skill_id: 10,
    skill_name: 'Cloud',
  });

  await knex('skills').insert({
    skill_id: 11,
    skill_name: 'Javascript',
  });

  await knex('skills').insert({
    skill_id: 12,
    skill_name: 'ReactJs',
  });
};