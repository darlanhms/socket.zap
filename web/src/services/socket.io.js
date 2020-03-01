import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.113:3000', {
    autoConnect: false,
});

const connect = function() {
    socket.connect();
}

const disconnect = function() {
    socket.disconnect();
}

export { disconnect, connect }


