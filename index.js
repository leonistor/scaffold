#!/usr/bin/env node

const prog = require('caporal')

prog.version('1.0.0')
  .command('create', 'Create a new application')
  .argument('<template>', 'Template to use')
  .option('--variant <variant>', 'Which <variant> of the template is going to be created')
  .action((args, options, logger) => {
    console.log({
      args,
      options
    })
  })

prog.parse(process.argv)