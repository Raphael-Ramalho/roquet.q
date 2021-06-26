const express = require('express')
const route = require('./route')

const server = express.Router()

server.use(route)

server.get('/', (req, res) => res.render("index"))