const fs = require('fs').promises// para listar as pastas dentro do projeto
const path = require ('path')

async function readDir(rootDir){
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files, rootDir)
}

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath)
        if(stats.isDirectory()){
            readDir(fileFullPath)
            continue
        }

        console.log(file, stats.isDirectory())
    }
}

readDir('/Users/olive/Desktop/Ts')