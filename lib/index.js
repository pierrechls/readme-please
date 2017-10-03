'use strict'

var fs = require('fs')
var path = require('path')
var generate = require('./generate')
var templates = require('./templates')

const README_FILE_NAME = 'README.md'

module.exports = function (force, template) {

    // If the selected template exists
    if(templates.hasOwnProperty(template)){

      var content = generate(templates[template])

      fs.access(README_FILE_NAME, fs.constants.F_OK, (err) => {
        // if file already exists
        if (!err && !force) {
          console.log('file already exists')
        } else {
          console.log('New file')
          fs.writeFile(README_FILE_NAME, content, function(err) {
            if(err) {
              return console.log(err);
            }
            console.log("The file was saved!")
          })
        }
      })

    } else {
      console.log()
      console.log(`The template '${template}' doesn't seem to exist`)
      console.log()
    }
}
