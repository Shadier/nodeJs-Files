const fs = require('fs')
const print = require('./printer')

const fromUrl = './Original Items'
const pasteUrl = './Pasted Items'
const{ COPYFILE_EXCL } = fs.constants


if (!fs.existsSync(pasteUrl)) {
    fs.mkdirSync(pasteUrl, 0744)
}

let dirBuf = Buffer.from(fromUrl)
let files = fs.readdirSync(fromUrl)

print.ln("Iniciando a copiar los archivos");
	
var errores = false
for (var i = 0; i < files.length ; i++) {
	const fileName = files[i]
	try {
		fs.copyFileSync(fromUrl+"\\"+fileName, pasteUrl+"\\"+fileName, COPYFILE_EXCL)
		print.show(fileName)
	} catch (err){
		errores = true
		print.showError("Ocurrio error al copiar el archivo \"" + fileName+ "\"")
	}
}
if (!errores)
	print.ln("Archivos copiados correctamente")
else
	print.showError("Se sucitaron errores al copiar archivos")