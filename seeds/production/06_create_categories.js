/* eslint-disable */
exports.seed = async function(knex, Promise) {
  // Deletes ALL sessions existing entries
  await knex('categories').del();

  await knex('categories').insert({
    category_id: 1,
    category_name: 'FullTime'
  });

  await knex('categories').insert({
    category_id: 2,
    category_name: 'PartTime'
  });

  await knex('categories').insert({
    category_id: 3,
    category_name: 'FullStack'
  });

  await knex('categories').insert({
    category_id: 4,
    category_name: 'Backend'
  });

  await knex('categories').insert({
    category_id: 5,
    category_name: 'Frontend'
  });

  await knex('categories').insert({
    category_id: 6,
    category_name: 'Database'
  });

  await knex('categories').insert({
    category_id: 7,
    category_name: 'Manager'
  });

  await knex('categories').insert({
    category_id: 8,
    category_name: 'Big Data'
  });

  await knex('categories').insert({
    category_id: 9,
    category_name: 'Junior'
  });

  await knex('categories').insert({
    category_id: 10,
    category_name: 'Machine Learning'
  });

  await knex('categories').insert({
    category_id: 11,
    category_name: 'DevOps'
  });
};