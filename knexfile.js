// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'intern-hub',
    },
    seeds: {
      directory: './seeds/dev',
    },
  },

  testing: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'intern-hub-test',
    },
    seeds: {
      directory: './knex/seeds/test',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'us-cdbr-iron-east-01.cleardb.net',
      user: 'b4324ad6d3722a',
      password: '3a99c577',
    },
    pool: {
      min: 2,
      max: 10
    },
  },

};
