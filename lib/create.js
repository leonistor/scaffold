const prompt = require('prompt')
const shell = require('shelljs')
const fs = require('fs')
const colors = require('colors/safe')

// Set prompt as green and use the "Replace" text
prompt.message = colors.green("Replace")

module.exports = (args, options, logger) => {
  const variant = options.variant || 'default'
  const templatePath = `${__dirname}/../templates/${args.template}/${variant}`
  const localPath = process.cwd()
  
  // Copying the Template Files
  if (fs.existsSync(templatePath)) {
    logger.info('Copying files...')
    shell.cp('-R', `${templatePath}/*`, localPath)
    logger.info('✔ The files have been copied!')
  } else {
    logger.error(`The requested template for ${args.template} wasn't found.`)
    process.exit(1)
  }

  // Replacing Variables
  const variables = require(`${templatePath}/_variables`)

  if (fs.existsSync(`${localPath}/_variables.js`)) {
    shell.rm(`${localPath}/_variables.js`)
  }

  logger.info('Please fill the following values…')

  // Ask for variables values
  prompt.start().get(variables, (err, result) => {
    // replace variable values in all files
    shell.ls('-Rl', '.').forEach(entry => {
      if (entry.isFile()) {
        // Replace '[VARIABLE]` with the corresponding variable value from the prompt
        variables.forEach(variable => {
          shell.sed('-i', `\\[${variable.toUpperCase()}\\]`, result[variable], entry.name)
        })
      }
    })
    logger.info('✔ Success!')
  })


}