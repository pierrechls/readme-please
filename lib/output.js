var colors = require('colors')

colors.setTheme({
  info: 'gray',
  help: 'cyan',
  warning: 'yellow',
  error: 'red',
  success: 'green'
})

const BACK_LINE = '\n'

module.exports = {
  info: function (text) {
    console.log(BACK_LINE + text.info + BACK_LINE)
  },
  help: function (text) {
    console.log(BACK_LINE + text.help + BACK_LINE)
  },
  warning: function (text) {
    console.log(BACK_LINE + text.warning + BACK_LINE)
  },
  error: function (text) {
    console.log(BACK_LINE + text.error + BACK_LINE)
  },
  success: function (text) {
    console.log(BACK_LINE + text.success + BACK_LINE)
  }
}
