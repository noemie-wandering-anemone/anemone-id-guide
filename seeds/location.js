exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('location').del()
      .then(function () {
        // Inserts seed entries
        return knex('location').insert([
          {id: 1, location: 'South Pacific'},
          {id: 2, location: 'North Pacific'},
          {id: 3, location: 'Mediterranean Sea'},
          {id: 4, location: 'Indian Ocean'},
          {id: 5, location: 'North Atlantic'},
          {id: 6, location: 'South Atlantic'},
        ]);
      });
  };
  