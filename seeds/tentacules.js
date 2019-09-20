exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tentacules').del()
    .then(function () {
      // Inserts seed entries
      return knex('tentacules').insert([
        {id: 1, description: 'long'},
        {id: 2, description: 'short'},
        {id: 3, description: 'stuby'},
        {id: 4, description: ''}
      ]);
    });
};
