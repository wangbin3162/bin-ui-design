const version = require('../package.json').version
const { resolve } = require('path')
const fs = require('fs-extra')

fs.writeFileSync(resolve(__dirname, '..', 'src', 'version.ts'), `export default '${version}'\n`)
