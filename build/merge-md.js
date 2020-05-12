const fs = require('fs')
const path = require('path')

const allFiles = [];
const allFiles2 = [];
const filePath = path.resolve(__dirname, '../examples/docs');
const filePath2 = path.resolve(__dirname, '../packages/card/README.md');

function readFile(filePath, allFiles) {
  fs.readdir(filePath, (error, files) => {
    if (!error) {
      files.forEach(filename => {
        //获取当前文件的绝对路径
        const filedir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, (err,stats) => {
          if (!err) {
            if (stats.isFile()) {
              allFiles.push(filedir);
            } else if (stats.isDirectory()) {
              readFile(filedir, allFiles);
            }
          }
        })
      })
    }
  })
}


readFile(filePath, allFiles)



// 模仿异步
setTimeout(() => {
  console.log('files', allFiles)
  fs.readFile(filePath2, { encoding: 'utf-8' }, (err, data) => {
    console.log('data', data)
    if (!err) {
      // fs.appendFile(allFiles[0], data, (err, data) => {
      //   console.log(data)
      // })
    }
  })

  // const readStream = fs.createReadStream(filePath2)
  // const writeStream = fs.createWriteStream(path.join(__dirname, 'text.md'))
  // readStream.on('data', (data) => {
  //   console.log(data)
  //   writeStream.write(data)
  // })

}, 20);

