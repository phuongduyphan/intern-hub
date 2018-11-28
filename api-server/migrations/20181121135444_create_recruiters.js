
exports.up = async (knex) => {
  await knex.schema.createTable('recruiters', (table) => {
    table
      .integer('recruiter_id')
      .unsigned()
      .unique()
      .notNullable()
      .references('user_id')
      .inTable('users')
      .onDelete('CASCADE');

    table
      .string('recruiter_address')
      .notNullable();

    table.string('company');

    table.text('recruiter_desc');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('recruiters');
};
