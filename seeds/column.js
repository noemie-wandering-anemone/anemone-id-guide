exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('column').del()
      .then(function () {
        // Inserts seed entries
        return knex('column').insert([
          {id: 1, aspect: 'plain'},
          {id: 2, aspect: 'striped'},
          {id: 3, aspect: 'dotted'}
          {id: 3, aspect: 'warty'},
          {id: 3, aspect: 'covered in bubble-shapes'}
        ]);
      });
  };
  