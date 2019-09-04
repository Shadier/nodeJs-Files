const colors = require('colors')

module.exports.show = (fileName) => {
    console.log(colors.white('"')+colors.blue(fileName.bold.italic.underline)+colors.white('" was copied ')+colors.green("successfully"))
}

module.exports.showError = (msg) => {
    console.log(colors.red(msg))
}

