
exports.up = async (knex) => {
  await knex.schema.createTable('student_skill', (table) => {
    table
      .integer('student_id')
      .unsigned()
      .notNullable()
      .references('student_id')
      .inTable('students')
      .onDelete('CASCADE');

    table
      .integer('skill_id')
      .unsigned()
      .notNullable()
      .references('skill_id')
      .inTable('skills')
      .onDelete('CASCADE');

     table.primary(['student_id', 'skill_id']); 
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('student_skill');
};
