const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({port: 8000})

server.register(
[
  {
    register: require('blipp'),
    options: {}
  },
  {
    register: require('hapi-pino'),
    options: {
      prettyPrint: true
    }
  },
], 
(err) => {
  if (err) throw err
  server.start(() => {
    server.log(`Server started at ${new Date().toTimeString()}`)
  })
})

