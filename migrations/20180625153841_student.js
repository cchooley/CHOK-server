
exports.up = function(knex, Promise) {
    return knex.schema.createTable('student', (table) => {
        table.increments()
        table.text('name')
        table.string('picture')
        table.text('school')
        table.string('email')
        table.string('password')
        table.string('interests')
        table.float('hours')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('student')
};
