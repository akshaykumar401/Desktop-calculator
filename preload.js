const { contextBridge } = require('electron/main')
const math = require('mathjs')



contextBridge.exposeInMainWorld("math", {
  evaluate: (expression) => {
    return math.evaluate(expression)
  },
  sqrt: (num) => {
    return math.sqrt(num)
  },
  factorial: (num) => {
    return math.factorial(num)
  }
})

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
