'use strict'

var fs = require('fs')
var path = require('path')
var output = require('./output')

const TEMPLATES_FOLDER = './templates/'
const TEMPLATES_FOLDER_RELATIVE = './../templates/'

var templates = {}

fs.readdirSync(TEMPLATES_FOLDER).forEach(file => {
  var template = require(TEMPLATES_FOLDER_RELATIVE + file)
  if (!templates[template.name]) {
    templates[template.name] = template.content
  } else {
    output.warning(`Warning : the template '${template.name}' seems to already exist`)
  }
})

module.exports = templates
