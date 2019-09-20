const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAnemones(req.app.connection)
    .then(anemones => {
        console.log(anemones)
      res.send(anemones)
    })
})

module.exports = router
