exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('genus').del()
      .then(function () {
        // Inserts seed entries
        return knex('genus').insert([
          {id: 1, genus: 'Anthopleura'},
          {id: 2, genus: 'Diadumene'},
          {id: 3, genus: 'Anthotoe'},
          {id: 4, genus: 'Oulactis'},
          {id: 5, genus: 'Bunodosama'},
          {id: 6, genus: 'Anemonia'},
          {id: 7, genus: 'Heteractis'},
          {id: 8, genus: 'Actinia'}
        ]);
      });
  };
  