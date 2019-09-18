exports.up = function(knex) {
  return knex.schema.createTable('anemones', table => {
    table.increments('id')
    table.string('name')
    table.string('species')
    table.integer('genus_id')
    table.integer('location_id')
    table.integer('column_id')
    table.integer('tentacules_id')
    table.integer('color_id')
    table.boolean('acontia')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('anemones')
};
