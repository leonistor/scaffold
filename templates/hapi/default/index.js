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
    register: require('good'),
    options: {
      ops: { interval: 10000 },
      reporters: {
        myConsoleReporter: [ 
          {
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ log: '*', response: '*' }]
          },
          { 
            module: 'good-console',
            args: [{
              format: 'YYYY.MM.DD/HH:mm:ss.SSS'
            }]
          }, 
          'stdout' 
        ]
      }
    }
  },
], 
(err) => {
  if (err) throw err
  server.start(() => {
    server.log(`Server started`)
  })
})

