exports.up = async (knex) => {
  await knex.schema.createTable('job_skill', (table) => {
    table
      .integer('job_id')
      .unsigned()
      .notNullable()
      .references('job_id')
      .inTable('jobs')
      .onDelete('CASCADE');

    table
      .integer('skill_id')
      .unsigned()
      .notNullable()
      .references('skill_id')
      .inTable('skills')
      .onDelete('CASCADE');

    table.primary(['job_id', 'skill_id']);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('job_skill');
};
