const fs = require('fs')
const path = require('path')
const writeFile = require('write')
const { lowerhyphenate, uppercamelcase, resolve, getComponentList } = require('./utils')
const componentTemplate = require('./template/component.template')
const combinationTemplate = require('./template/combination.template')

// yarn new compontA
const componentName = process.argv[2]; // get component name like componentA
if (!componentName) {
  console.error('Please enter new component name')
  process.exit(1)
}

// check componentA exist
const components = getComponentList();
if (components.includes(componentName)) {
  console.error(`${componentName} has already exist.`)
  process.exit(1)
}
components.push(componentName)

function replaceComponent(str, component) {
  return String(str)
    .replace(/(<%component%>)/g, lowerhyphenate(component))
    .replace(/(<%COMPONENT%>)/g, uppercamelcase(component));
}

function combinedReplace(temp) {
  const regexp = new RegExp(' *<% for %>\\n?([\\s\\S]*?) *<% /for %>\\n?', 'mg')
  return temp.replace(regexp, (matches, cycleTemp) => {
    return components.map(component => replaceComponent(cycleTemp, component)).join('')
  })
}

function writeSingleFile(config) {
  const filePath = replaceComponent(config.path, componentName)
  const templates = Array.isArray(config.temp) ? config.temp : [config.temp]

  if (config.type === 'update') {
    let index = 0
    let fileData = fs.readFileSync(resolve(filePath), 'utf-8')
    const regular = new RegExp('\\n(.*?)<% component temp position %>', 'mg')

    fileData = fileData.replace(regular, matches => {
      const temp = templates[index++]
      if (temp) {
        return replaceComponent(temp, componentName) + matches
      } else {
        return matches
      }
    })

    writeFile.sync(resolve(filePath), fileData)
  } else {
    const fileData = replaceComponent(config.temp, componentName)
    writeFile.sync(resolve(filePath), fileData)
  }
}

function writeCombinedFile(config) {
  const { path: filePath, temp: fileTemp } = config
  let index = 0;
  let fileData = fs.readFileSync(resolve(filePath), 'utf-8')
  const regular = new RegExp('<% combination temp start %>([\\s\\S]*?)<% combination temp end %>', 'mg')

  fileData = fileData.replace(regular, (matches, data) => {
    const temp = Array.isArray(fileTemp) ? fileTemp[index++] : fileTemp

    if (temp) {
      // remove last line of data
      data = data.match(/[\s\S]*\n/)[0]
      console.log('data', data);

      const newData = combinedReplace(temp)
      return matches.replace(data, newData)
    } else {
      return matches
    }
  })

  writeFile.sync(resolve(filePath), fileData)
}

writeSingleFile(componentTemplate.entry)
writeSingleFile(componentTemplate.entryTypes)
writeSingleFile(componentTemplate.entryStyle)
writeSingleFile(componentTemplate.entryStyleIndex)
writeSingleFile(componentTemplate.page)
writeSingleFile(componentTemplate.readme)
writeSingleFile(componentTemplate.example)
writeSingleFile(componentTemplate.exampleRouter)
writeSingleFile(componentTemplate.types)

writeCombinedFile(combinationTemplate.package)
writeCombinedFile(combinationTemplate.packageStyle)
writeCombinedFile(combinationTemplate.index)
writeCombinedFile(combinationTemplate.typing)

console.log(`Create component ${componentName} success!`)
