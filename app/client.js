//instantiate/open connection to same port as backend ws
const socket = new WebSocket('ws://localhost:8080');

//listen for msgs
socket.onmessage = ({ data }) => {
    console.log('Message from server: ', data);
}

document.querySelector('button').onclick = () => {
    socket.send('hello');
}