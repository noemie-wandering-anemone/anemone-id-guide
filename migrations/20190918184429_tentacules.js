
exports.up = function(knex) {
    return knex.schema.createTable('tentacules', table => {
        table.increments('id')
        table.string('tentacules')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tentacules')
};
