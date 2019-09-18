exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('color').del()
      .then(function () {
        // Inserts seed entries
        return knex('color').insert([
          {id: 1, aspect: 'orange'},
          {id: 2, aspect: 'green'},
          {id: 3, aspect: 'red'},
          {id: 4, aspect: 'purple'},
          {id: 5, aspect: 'white'}
        ]);
      });
  };
  