
exports.up = async (knex) => {
  await knex.schema.createTable('skills', (table) => {
    table.increments('skill_id');
    
    table
      .string('skill_name', 50)
      .notNullable();

  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('skills');
};
