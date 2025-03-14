const winston  = require('winston')

const location = 'logs/'

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {service: 'user-service'},
    transports: [
        new winston.transports.File({filename: location + 'error.log', level: 'error'}),
        new winston.transports.File({filename: location + 'combined.log',})
    ]
})

function crearLogger (service){
    return {
        log: (message) => {
            logger.log('info', {message, service})
        }
    }
}

module.exports = {
    crearLogger
}