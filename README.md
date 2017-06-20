# scaffold

From [Sitepoint article: Create Your Own Yeoman-Style Scaffolding Tool with Caporal.js](https://www.sitepoint.com/scaffolding-tool-caporal-js/)

## install

1. install node [without sudo](https://docs.npmjs.com/getting-started/fixing-npm-permissions)! (Option 2)
2. `git clone git@github.com:leonistor/scaffold.git` into a local folder, like `~/bin`
3. `cd scaffold`
4. `npm install`
5. `npm link` to get the scaffold command 

## usage

1. `mkdir new-project && cd new-project` or use [mcd](https://unix.stackexchange.com/questions/9123/is-there-a-one-liner-that-allows-me-to-create-a-directory-and-move-into-it-at-th) :wink:
2. simple usage `scaffold create hapi`
3. more options: `scaffold --help`

## customize

Add new template folders in `templates`, within `default` folder for default. Customize `_variables.js` for variables (this file will not be copied into the generated project).

## alternatives

- [lehm](https://mustardamus.github.io/lehm/)
- [yo](http://yeoman.io/) :u5272:
- suggestions? add an issue
