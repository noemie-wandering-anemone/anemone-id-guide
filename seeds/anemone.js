exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('anemone').del()
      .then(function () {
        // Inserts seed entries
        return knex('anemone').insert([
          {id: 1, name: 'Green Striped Anemone', species: 'neozelanica', genus_id: 2, location_id: 1, column_id: 2, tentacules_id: 1, color_id: 2, acontia: true},
          {id: 2, name: 'Starburst Anemone', species: 'sola', genus_id: 1, location_id: 2, column_id: 4, tentacules_id: 1, color_id:  , acontia: },
          {id: 3, name: '', species: '', genus_id:  , location_id:  , column_id:  , tentacules_id:  , color_id:  , acontia: },
          {id: 4, name: '', species: '', genus_id:  , location_id:  , column_id:  , tentacules_id:  , color_id:  , acontia: },
          {id: 5, name: '', species: '', genus_id:  , location_id:  , column_id:  , tentacules_id:  , color_id:  , acontia: },
          {id: 6, name: '', species: '', genus_id:  , location_id:  , column_id:  , tentacules_id:  , color_id:  , acontia: },
          {id: 7, name: '', species: '', genus_id:  , location_id:  , column_id:  , tentacules_id:  , color_id:  , acontia: },
          {id: 8, name: '', species: '', genus_id:  , location_id:  , column_id:  , tentacules_id:  , color_id:  , acontia: }
        ]);
      });
  };
  