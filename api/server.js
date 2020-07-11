const express = require('express');

const submissionsRouter = require('../entries/entry-router.js');

const server = express();

server.use(express.json());

server.use('/api/blackhole', submissionsRouter);

const port = process.env.PORT || 5000;
server.get('/', (req, res) => {
    res.send(`Blachole API is Online!`)
})

module.exports = server;