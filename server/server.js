const path = require('path')
const express = require('express')

const filtersRoutes = require('./routes/filters')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/filters/', filtersRoutes)

module.exports = server
