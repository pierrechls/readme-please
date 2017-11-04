'use strict'

var fs = require('fs')
var path = require('path')
var output = require('./output')

var templatesFolder = path.join(__dirname, '..', 'templates/')

var templates = {}

fs.readdirSync(templatesFolder).forEach(file => {
  var template = require(templatesFolder + file)
  if (!templates[template.name]) {
    templates[template.name] = template.content
  } else {
    output.warning(`Warning : the template '${template.name}' seems to already exist`, true, true)
  }
})

module.exports = templates
