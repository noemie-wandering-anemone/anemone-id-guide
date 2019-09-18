exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('genus').del()
      .then(function () {
        // Inserts seed entries
        return knex('genus').insert([
          {id: 1, genus: 'Anthopleura'},
          {id: 2, genus: 'Diadumene'},
          {id: 3, genus: 'Anthotoe'},
          {id: 3, genus: 'Anthotoe'}
        ]);
      });
  };
  