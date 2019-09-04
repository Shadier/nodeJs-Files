const fs = require('fs')
const print = require('./printer')

const fromUrl = './Original Items'
const pasteUrl = './Pasted Items'

if (!fs.existsSync(pasteUrl)) {
    fs.mkdirSync(pasteUrl, 0744)
}

let dirBuf = Buffer.from(fromUrl)
let files = fs.readdirSync(fromUrl)

for (var i = 0; i < files.length ; i++) {
	const fileName = files[i]
	fs.copyFile(fromUrl+"\\"+fileName, pasteUrl+"\\"+fileName, (err) => {
		if (err) 
			print.showError(err)
		else
			print.show(fileName)
	})
}
