
exports.up = function(knex) {
    return knex.schema.createTable('column', table => {
        table.increments('id')
        table.string('aspect')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('column')
};
