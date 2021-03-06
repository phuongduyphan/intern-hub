const { Model, knexSnakeCaseMappers } = require('objection');
const Knex = require('knex');
const knexConfig = require('../../knexfile');

const environment = process.env.NODE_ENV || 'development';

console.log(knexConfig[environment]);

const knex = Knex(Object.assign(knexConfig[environment], knexSnakeCaseMappers()));

// knex.on('query', (queryData) => {
//   console.log(queryData);
// });

Model.knex(knex);

module.exports = {
  Model,
  knex,
};
