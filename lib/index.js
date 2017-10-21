'use strict'

var fs = require('fs')
var path = require('path')
var output = require('./output')
var generate = require('./generate')
var templates = require('./templates')

const README_FILE_NAME = 'README.md'

module.exports = function (list, force, template) {

    if (list) {
      output.help('List of possible templates :', true, true)
      for (var templateName in templates) {
        output.help(`\t - ${templateName}`, false, false)
      }
      output.help('', false, false)
      return
    }

    // If the selected template exists
    if (templates.hasOwnProperty(template)) {
      var content = generate(templates[template])

      fs.access(README_FILE_NAME, fs.constants.F_OK, (err) => {
        // if file already exists
        if (!err && !force) {
          output.warning('A README file already exists', true, false)
          output.help(`Use --force option to overwrite it with the '${template}' template`, false, true)
        } else {
          fs.writeFile(README_FILE_NAME, content, function(err) {
            err ? output.error(err) : output.success(`New README file generated with the '${template}' template`, true, true)
          })
        }
      })

    } else {
      output.error(`The template '${template}' doesn't seem to exist`, true, true)
    }
}
