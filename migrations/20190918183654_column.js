
exports.up = function(knex) {
    return knex.schema.createTable('column', table => {
        table.increments('id')
        table.string('column')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('column')
};
