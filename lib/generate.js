'use strict'

module.exports = function (template) {
  var content = ''

  for (var line in template) {
    line > 0 ? content += '\n' : content += ''
    content += `${template[line]}`
    line < template.length - 1 ? content += '\n' : content += ''
  }

  return content;

}
