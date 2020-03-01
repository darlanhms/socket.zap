const socketio = require('socket.io');
let io;

const connections = [];

exports.setupWebsocket = (server) => {
    io = socketio(server);

    io.on('connection', socket => {

        const { user } = socket.handshake.query;

        console.log("connectionId:", socket.id, user);

        connections.push({
            id: socket.id,
            user: user
        });

    });
};

exports.sendMessage = (connectionId, message, data) => {
    io.to(connectionId).emit(message, data);
}