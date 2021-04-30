const express = require('express')
const recipesRouter = require("./recipes/recipes-router")

const server = express();

server.use(express.json())
server.use(recipesRouter)

module.exports = server;