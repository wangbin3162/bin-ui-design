import { resolve } from 'path'

export const root = resolve(__dirname, '..')
export const compRoot = resolve(root, 'src')
export const styleRoot = resolve(root, 'src/_styles')

export const output = resolve(root, 'dist/styles')

export const pkgPath = root
