exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('column').del()
      .then(function () {
        // Inserts seed entries
        return knex('column').insert([
          {id: 1, column: 'plain'},
          {id: 2, column: 'striped'},
          {id: 3, column: 'dotted'},
          {id: 4, column: 'warty'},
          {id: 5, column: 'covered in bubble-shapes'}
        ]);
      });
  };
  