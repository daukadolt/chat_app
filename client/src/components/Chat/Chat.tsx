import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import {RouteComponentProps} from "react-router";

let socket: SocketIOClient.Socket;

const Chat = (param: RouteComponentProps) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const backendSocketAddr = 'localhost:8888';

    useEffect(() => {
        const { name, room } = queryString.parse(param.location.search);

        socket = io(backendSocketAddr);

        if (typeof name === 'string' && typeof room === 'string') {
            setName(name);
            setRoom(room);

            socket.emit('join', { name, room });
        }

        return () => {
            socket.emit('disconnect');
        };
    }, [param.location.search]);

    return (
        <h1> Chat </h1>
    );
};

export default Chat;
