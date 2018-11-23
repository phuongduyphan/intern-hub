
exports.up = async (knex) => {
  await knex.schema.createTable('categories', (table) => {
    table.increments('category_id');
    
    table
      .string('category_name', 50)
      .notNullable();

  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('categories');
};
