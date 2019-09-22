module.exports = {
  getData,
  getAnemones
}

function getData (db, filter) {
  return db(filter).select()
}

function getAnemones (db) {
  return db('anemone')
    .join('color', 'color.id', 'anemone.color_id')
    .join('column', 'column.id', 'anemone.column_id')
    .join('genus', 'genus.id', 'anemone.genus_id')
    .join('location', 'location.id', 'anemone.location_id')
    .join('tentacules', 'tentacules.id', 'anemone.tentacules_id')
    .select('*', 'anemone.id AS id')
}