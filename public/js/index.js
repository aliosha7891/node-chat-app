const socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('disconnect', () => {
    console.log('Desconnected from server');
});

socket.on('newMessage', (message) => {
    console.log('Message: ', message);
});