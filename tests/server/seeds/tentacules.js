exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tentacules').del()
    .then(function () {
      // Inserts seed entries
      return knex('tentacules').insert([
        {id: 1, aspect: 'long'},
        {id: 2, aspect: 'short'},
        {id: 3, aspect: 'stuby'}
      ]);
    });
};
