exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('anemone').del()
      .then(function () {
        // Inserts seed entries
        return knex('anemone').insert([
          {id: 1, name: 'Green Striped Anemone', species: 'neozelanica', genus_id: 2, location_id: 1, column_id: 2, tentacules_id: 1, color_id: 2, acontia: true},
          {id: 2, name: 'Starburst Anemone', species: 'sola', genus_id: 1, location_id: 2, column_id: 4, tentacules_id: 1, color_id: 2, acontia: false},
          {id: 3, name: 'Waratah Anemone', species: 'tenebrosa', genus_id: 8, location_id: 1, column_id: 1, tentacules_id: null, color_id: 3, acontia: false},
          {id: 4, name: 'Beadlet Anemone', species: 'equina', genus_id: 8, location_id: 3, column_id: 1, tentacules_id: null, color_id: 3, acontia: false},
          {id: 5, name: 'Beadlet Anemone', species: 'mediterranea', genus_id: 8, location_id: 5, column_id: 1, tentacules_id: null, color_id: 3, acontia: false},
          {id: 6, name: 'Knobbly Anemone', species: 'capense', genus_id: 5, location_id: 4, column_id: 4, tentacules_id: null, color_id: 4, acontia: false},
        //   {id: 7, name: '', species: '', genus_id:  , location_id:  , column_id:  , tentacules_id:  , color_id:  , acontia: },
        //   {id: 8, name: '', species: '', genus_id:  , location_id:  , column_id:  , tentacules_id:  , color_id:  , acontia: }
        ]);
      });
  };
  