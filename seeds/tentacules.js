exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tentacules').del()
    .then(function () {
      // Inserts seed entries
      return knex('tentacules').insert([
        {id: 1, tentacules: 'long'},
        {id: 2, tentacules: 'short'},
        {id: 3, tentacules: 'stuby'},
        {id: 4, tentacules: ''}
      ]);
    });
};
