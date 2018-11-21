
exports.up = async (knex) => {
  await knex.schema.createTable('students', (table) => {
    table
      .integer('student_id')
      .unsigned()
      .notNullable()
      .references('user_id')
      .inTable('users')
      .onDelete('CASCADE');

    table.date('student_dob');

    table.string('student_major', 50);

    table.string('student_college');
 
  })
};

exports.down = async (knex) => {
  await knex.schema.dropTable('students');
};
