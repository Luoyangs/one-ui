const fs = require("fs")
const path = require("path")
const camelcase = require("camelcase")

// 读取新增的icons
const pa = fs.readdirSync(path.join(__dirname, "./svg"))
const svgs = pa.filter(file => file.endsWith(".svg"))
  .map(file => file.replace(".svg", ""))

const obj = {}
svgs.forEach(svg => {
  const key = `${camelcase(svg)}Icon`
  obj[key] = `const ${key} = require("./${svg}.svg")`
})

let data = Object.values(obj).join("\n")
data += "\n\n" + `module.exports = {\n${Object.keys(obj).sort().map((key, index) => index ? `\t${key}` : key).join(",")},\n}\n`

fs.writeFileSync(path.join(__dirname, "./module.json"), JSON.stringify(svgs))
fs.writeFileSync(path.join(__dirname, "./svg/index.js"), data)
