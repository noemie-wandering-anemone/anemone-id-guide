
exports.up = function(knex) {
    return knex.schema.createTable('location', table => {
        table.increments('id')
        table.string('genus')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('location')
};
