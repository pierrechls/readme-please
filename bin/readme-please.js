#!/usr/bin/env node

/********************/
/* readme-please.js */
/********************/

var path = require('path')
var program = require('commander')
var pkg = require(path.join('../package'))

/**
 * Usage.
 */

program
  .version(pkg.version)
  .description('Simple CLI to easily generate a README file from a specific and customizable template')
  .option('-f, --force', 'Rewrite existing README')
  .option('-t, --template [name]', 'Choose a specific template', 'default')
  .parse(process.argv)

/**
 * Help.
 */

program.on('--help', function () {
 console.log()
})

program.parse(process.argv)

if (program.args.length > 0) return program.help()

var force = program.force
var template = program.template

var readmePlease = require(path.join('../lib'))
readmePlease(force, template)
