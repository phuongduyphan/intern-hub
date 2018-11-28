/* eslint-disable */
exports.seed = async function(knex, Promise) {
  // Deletes ALL sessions existing entries
  await knex('job_category').del();

  await knex('job_category').insert({
    job_id: 1,
    category_id: 2,
  });

  await knex('job_category').insert({
    job_id: 1,
    category_id: 4,
  });

  await knex('job_category').insert({
    job_id: 1,
    category_id: 9,
  });

  await knex('job_category').insert({
    job_id: 2,
    category_id: 11,
  });

  await knex('job_category').insert({
    job_id: 2,
    category_id: 4,
  });

  await knex('job_category').insert({
    job_id: 3,
    category_id: 4,
  });

  await knex('job_category').insert({
    job_id: 3,
    category_id: 9,
  });

  await knex('job_category').insert({
    job_id: 4,
    category_id: 3,
  });
};