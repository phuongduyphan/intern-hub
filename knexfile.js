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
      host: 'eu-cdbr-west-02.cleardb.net',
      user: 'beedadf21ed818',
      password: 'a0d5ee56',
    },
  },

};
