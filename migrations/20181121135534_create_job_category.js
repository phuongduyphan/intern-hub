
exports.up = async (knex) => {
  await knex.schema.createTable('job_category', (table) => {
    table
      .integer('job_id')
      .unsigned()
      .notNullable()
      .references('job_id')
      .inTable('jobs')
      .onDelete('CASCADE');

    table
      .integer('category_id')
      .unsigned()
      .notNullable()
      .references('category_id')
      .inTable('categories')
      .onDelete('CASCADE');

     table.primary(['job_id', 'category_id']); 
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('job_category');
};
