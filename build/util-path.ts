import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const root = resolve(__dirname, '..')
export const compRoot = resolve(root, 'src')
export const styleRoot = resolve(root, 'src/_styles')

export const output = resolve(root, 'dist/styles')

export const pkgPath = root
