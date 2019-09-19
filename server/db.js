const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const db = require('knex')(config)

module.exports = {
  getData
}

function getData (filter) {
  return db(filter).select()
}
