const WebSocket = require('ws')
const server = new WebSocket.Server({ port: '8080' })

server.on('connection', socket => {
  socket.on('message', mensaje => {
    console.log(`Recibí un mensaje: ${mensaje}`)
    socket.send(`Mira cliente me enviaste esto: ${mensaje}`)
  })
})
