const socket = new WebSocket('ws://localhost:8080')

socket.onmessage = ({ data }) => {
  console.log('Mensaje del servidor es -> ', data)
}

document.querySelector('button').onclick = () => {
  socket.send('Capa de aplicación - WebSocketAPI con TCP')
}
