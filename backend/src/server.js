const express = require('express'); //importando a biblioteca "express"
const mongoose = require('mongoose'); //importando a biblioteca "mongoose"
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require("./websocket");

const app = express();
const server = http.Server(app);

const port = 3000;
const mongoServer = 'mongodb://localhost:27017/socket-zap-db';

setupWebsocket(server);

mongoose.connect(mongoServer, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(port, () => {
    console.log("servidor ok porta: ", port);
});