const request = require('supertest')

const knex = require('knex')
const config = require('../../knexfile').test
let testDb = knex(config)

const server = require('../../server/server')
server.connection = testDb

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

describe('GET /v1/filters/:filter', () => {
  test('returns data from the right table', () => {
    return request(server)
      .get('/api/v1/filters/anemone')
      .expect(200)
      .then((res) => {
        expect(res.body.length).toBe(6)
      })
      .catch(err => expect(err).toBeNull())
  })
})