
exports.up = function(knex) {
    return knex.schema.createTable('color', table => {
        table.increments('id')
        table.string('color')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('color')
};
