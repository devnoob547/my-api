const { Router } = require('express')
const routes = Router()

const clients = require('./data.json')

routes.get('/clients', (req, res) => res.json(clients))

module.exports = routes