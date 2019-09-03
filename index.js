const logger = require('./utils')
const calculadora =require('./juego')


logger.log("Hello world")

logger.error("This is an error")

logger.log(calculadora.suma(9,7))

logger.log(calculadora.division(1,1))

let result = calculadora.division(-1, 2)

//logger.log( typeof result === 'string' )

if ( typeof result === 'string')
    logger.error(result)
else
    logger.log(result)