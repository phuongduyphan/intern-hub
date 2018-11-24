
exports.up = async (knex) => {
  await knex.schema.createTable('users', (table) => {
    table.increments('user_id');

    table
      .string('displayname', 50)
      .notNullable();

    table
      .string('username', 50)
      .notNullable();
    table.unique('username');

    table
      .string('userpass')
      .notNullable();

    table
      .enu('role', ['admin', 'student', 'recruiter'])
      .notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('users');
};
