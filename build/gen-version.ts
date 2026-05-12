import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

interface PackageLike {
  version: string
}

const packageJsonPath = resolve(import.meta.dirname, '..', 'package.json')
const outputPath = resolve(import.meta.dirname, '..', 'src', 'version.ts')

const pkg = JSON.parse(await readFile(packageJsonPath, 'utf-8')) as PackageLike

await writeFile(outputPath, `export default '${pkg.version}'\n`)
