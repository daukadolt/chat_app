import * as http from 'http';
import * as socketio from 'socket.io';

import app from './App';
import Config from './Config';

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('new connection!');

    socket.on('join', ({ name, room }) => {
        console.log(name, room);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
});

server.listen(Config.THE_PORT, () => {
    console.log(`Server is running on http://localhost:${Config.THE_PORT}`);
});
