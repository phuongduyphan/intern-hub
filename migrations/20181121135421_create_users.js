
exports.up = async (knex) => {
  await knex.schema.createTable('users', (table) => {
    table.increments('user_id');

    table
      .string('user_display_name', 50)
      .notNullable();

    table
      .string('user_name', 50)
      .notNullable();
    table.unique('user_name');

    table
      .string('user_pass')
      .notNullable();

    table
      .enu('role', ['admin', 'student', 'recruiter'])
      .notNullable();
  })
};

exports.down = async (knex) => {
  await knex.schema.dropTable('users');
};
