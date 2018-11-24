/* eslint-disable */
exports.seed = async function(knex, Promise) {
  // Deletes ALL sessions existing entries
  await knex('job_skill').del();

  await knex('job_skill').insert({
    job_id: 1,
    skill_id: 11,
  });

  await knex('job_skill').insert({
    job_id: 1,
    skill_id: 1,
  });

  await knex('job_skill').insert({
    job_id: 2,
    skill_id: 1,
  });

  await knex('job_skill').insert({
    job_id: 2,
    skill_id: 2,
  });

  await knex('job_skill').insert({
    job_id: 3,
    skill_id: 1,
  });

  await knex('job_skill').insert({
    job_id: 3,
    skill_id: 3,
  });

  await knex('job_skill').insert({
    job_id: 3,
    skill_id: 8,
  });

  await knex('job_skill').insert({
    job_id: 4,
    skill_id: 1,
  });

  await knex('job_skill').insert({
    job_id: 4,
    skill_id: 11,
  });

  await knex('job_skill').insert({
    job_id: 4,
    skill_id: 12,
  });
};