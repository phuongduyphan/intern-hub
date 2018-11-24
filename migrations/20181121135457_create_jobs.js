
exports.up = async (knex) => {
  await knex.schema.createTable('jobs', (table) => {
    table.increments('job_id');

    table
      .integer('recruiter_id')
      .unsigned()
      .notNullable()
      .references('recruiter_id')
      .inTable('recruiters')
      .onDelete('CASCADE');

    table
      .string('job_title', 50)
      .notNullable();

    table
      .text('job_desc', 'longtext')
      .notNullable();

    table.string('job_salary');

    table.string('job_duration');

    table
      .string('location')
      .notNullable();
    table
      .boolean('is_validated')
      .defaultTo(0);

  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('jobs');
};
