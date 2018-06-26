exports.up = function(knex, Promise) {
    return knex.schema.createTable('internship', (table) => {
        table.increments()
        table.text('name')
        table.string('website')
        table.string('logo')
        table.text('description')
        table.integer('hours')
        table.boolean('paid')
        table.text('feedback')
        table.string('location')
        table.text('internshipOffered')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('internship')
};
