const colors = require('colors')

module.exports.log = (msg) => {
    console.log(colors.green(msg))
}

module.exports.error = (msg) => {
    console.log(colors.red(msg))
}

