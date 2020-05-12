const {
  stripScript,
  stripTemplate,
  genInlineComponentText
} = require('./util')
const markdown = require('./markdown')

module.exports = source => {
  const content = markdown.render(source)

  const startTag = '<!--one-demo:'
  const endTag = ':one-demo-->'
  const startTagLen = startTag.length
  const endTagLen = endTag.length

  let componentStr = ''
  let id = 1
  let output = []
  let start = 0
  let commentStart = content.indexOf(startTag)
  let commentEnd = content.indexOf(endTag, commentStart + startTagLen)

  while(commentStart !== -1 && commentEnd !== -1) {
    output.push(content.slice(start, commentStart))

    const commentContent = content.slice(commentStart + startTagLen, commentEnd)
    const html = stripTemplate(commentContent)
    const script = stripScript(commentContent)

    const demoComponentContent = genInlineComponentText(html, script)
    const demoComponentName = `OneDemo${id++}`

    output.push(`<template slot="source"><${demoComponentName} /></template>`)
    componentStr += `${demoComponentName}: ${demoComponentContent},`

    // 重新计算下一次的位置
    start = commentEnd + endTagLen
    commentStart = content.indexOf(startTag, start)
    commentEnd = content.indexOf(endTag, commentStart + startTagLen)
  }

  // 只有当demo不存在的时候，才可以在markdown中写script标签
  let pageScript = ''
  if (componentStr) {
    pageScript = `<script>
                    export default {
                      name: 'component-demo',
                      components: {
                        ${componentStr}
                      }
                    }
                  </script>`
  } else if (content.indexOf('<script>') === 0) {
    start = content.indexOf('</script>') + '</script>'.length
    pageScript = content.slice(0, start)
  }

  output.push(content.slice(start))

  return `
    <template>
      <section class="content one-demos">
        ${output.join('')}
      </section>
    </template>
    ${pageScript}
  `
}
