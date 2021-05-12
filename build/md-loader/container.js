const mdContainer = require('markdown-it-container')

module.exports = md => {
  md.use(mdContainer, 'demo', {
    // 当我们写:::demo :::这样的语法时才会进入自定义渲染方法
    validate(params) {
      // 表示检测以"::: demo"开始的都符合条件
      return params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens, idx) {
      console.log('tokens', tokens)
      const token = tokens[idx];
      // info 表示三个反引号后面跟的那个字符串
      const info = token && token.info.trim().match(/^demo\s*(.*)$/)

      // 1 意味着起始标签
      if (token.nesting === 1) {
        // m[1]表示/^demo\s*(.*)$/括号匹配的内容
        const desc = info && info.length ? info[1] : ''
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''

        return `<demo-block>
                  ${desc ? `<div>${md.render(desc)}</div>` : ''}
                  <!--one-demo:${content}:one-demo-->`
      }

      return '</demo-block>'
    }
  })

  md.use(mdContainer, 'tip')
  md.use(mdContainer, 'warning')
}
