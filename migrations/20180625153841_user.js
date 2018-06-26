
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', (table) => {
        table.increments()
        table.text('name')
        table.string('picture')
        table.text('school')
        table.string('e-mail')
        table.string('password')
        table.string('interests')
        table.string('hours')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user')
};
