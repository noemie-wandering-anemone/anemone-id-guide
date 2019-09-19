exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('color').del()
      .then(function () {
        // Inserts seed entries
        return knex('color').insert([
          {id: 1, color: 'orange'},
          {id: 2, color: 'green'},
          {id: 3, color: 'red'},
          {id: 4, color: 'purple'},
          {id: 5, color: 'white'}
        ]);
      });
  };
  