const express = require('express'); //importando a biblioteca "express"
const mongoose = require('mongoose'); //importando a biblioteca "mongoose"
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require("./websocket");
const config = require('./config');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(config.mongoServer, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(config.port, () => {
    console.log("servidor ok porta: ", config.port);
});