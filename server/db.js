module.exports = {
  getData
}

function getData (db, filter) {
  if (filter === 'column' || filter === 'tentacules') {
    return db(filter).select('aspect')
  }
  return db(filter).select()
}
