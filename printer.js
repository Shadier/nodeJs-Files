const colors = require('colors')


const show = (fileName) => {
    console.log(colors.white('"')+colors.blue(fileName.bold.italic.underline)+colors.white('" was copied ')+colors.green("successfully"))
}

const showError = (msg) => {
    console.log(colors.red(msg))
}

module.exports = {
	showError, 
	show
}