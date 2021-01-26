const EventEmitter = require('events')

class Logger extends EventEmitter {
  log(msg) {
    this.emit('message', `${msg} ${Date.now()}`)
  }
}

const logger = new Logger()

logger.on('message', (data) => {
  console.log(data)
})

for (let i = 0; i < 3; i++) {
  logger.log(`Hello ${i}`)
}
