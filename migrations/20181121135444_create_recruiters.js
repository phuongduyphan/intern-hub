
exports.up = async (knex) => {
  await knex.schema.createTable('recruiters', (table) => {
    table
      .integer('recruiter_id')
      .unsigned()
      .notNullable()
      .references('user_id')
      .inTable('users')
      .onDelete('CASCADE');

    table
      .string('address')
      .notNullable();
  })
};

exports.down = async (knex) => {
  await knex.schema.dropTable('recruiters');
};
