
exports.up = function(knex) {
    return knex.schema.createTable('genus', table => {
        table.increments('id')
        table.string('genus')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('genus')
};
