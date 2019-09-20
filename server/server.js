const path = require('path')
const express = require('express')

const filtersRoutes = require('./routes/filters')
const anemonesRoutes = require('./routes/anemones')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/filters/', filtersRoutes)
server.use('/api/v1/anemones', anemonesRoutes)

module.exports = server
