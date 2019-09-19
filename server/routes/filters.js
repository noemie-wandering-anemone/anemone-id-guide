const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/:filter', (req, res) => {
  db.getData(req.params.filter)
    .then(results => {
      res.send(results)
    })
})

module.exports = router
