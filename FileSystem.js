const fs = require('fs')
const print = require('./printer')
const path = require('path')

const fromUrl = './Original'
const pasteUrl = './Pasted'
const{ COPYFILE_EXCL } = fs.constants


if (!fs.existsSync(pasteUrl)) {
    fs.mkdirSync(pasteUrl, 0744)
}


print.ln("Iniciando a copiar los archivos");
	
var errores = false
copyFiles(fromUrl, pasteUrl)

if (!errores)
	print.ln("Archivos copiados correctamente")
else
	print.showError("Se sucitaron errores al copiar archivos")






function isFile(pathItem) {
  return !!path.extname(pathItem);
}

function copyFiles(source, destination){
	let files = fs.readdirSync(source)
	for (var i = 0; i < files.length ; i++) {
		const fileName = files[i]
		if(isFile(source+''+fileName)){
			try {
				fs.copyFileSync(source+"\\"+fileName, destination+"\\"+fileName, COPYFILE_EXCL)
				print.show(fileName)
			} catch (err){
				errores = true
				print.showError("Ocurrio error al copiar el archivo \"" + fileName+ "\"")
			}
		}else{
			if (!fs.existsSync(destination+'/'+fileName))
			    fs.mkdirSync(destination+'/'+fileName);
			copyFiles(source+'/'+fileName, destination+'/'+fileName)
		}
	}
}