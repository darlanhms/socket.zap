import socketio from 'socket.io-client';
const config = require('./config.json');

const socket = socketio(config.servidor, {
    autoConnect: false,
});

const connect = function() {
    socket.connect();
}

const disconnect = function() {
    socket.disconnect();
}

export { disconnect, connect }


