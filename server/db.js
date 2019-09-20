module.exports = {
  getData,
  getAnemones
}

function getData (db, filter) {
  if (filter === 'column' || filter === 'tentacules') {
    return db(filter).select('aspect')
  }
  return db(filter).select()
}

function getAnemones (db) {
  return db('anemone')
    .join('color', 'color.id', 'anemone.color_id')
    .select('*', 'anemone.id AS id')
}