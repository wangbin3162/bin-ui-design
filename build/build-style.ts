import { series, dest, src, type TaskFunction } from 'gulp'
import { pathToFileURL } from 'node:url'
import autoprefixer from 'gulp-autoprefixer'
import postcss from 'gulp-postcss'
import cleanCSS from 'gulp-clean-css'

import { compRoot, styleRoot, output } from './util-path.ts'

// 复制字体包
const copyFonts = () => src(`${styleRoot}/fonts/**`).pipe(dest(`${output}/fonts`))

/**
 * 全量打包
 */
const buildFull = () =>
  src(`${styleRoot}/*.css`).pipe(postcss()).pipe(cleanCSS()).pipe(autoprefixer()).pipe(dest(output))

/**
 * 通用类打包
 */
const buildCommon = () =>
  src(`${styleRoot}/common/*.css`)
    .pipe(postcss())
    .pipe(cleanCSS())
    .pipe(autoprefixer())
    .pipe(dest(`${output}/common`))

/**
 * 单个组件的样式打包
 */
const buildComponents = () =>
  src(`${compRoot}/**/styles/index.css`)
    .pipe(postcss())
    .pipe(cleanCSS())
    .pipe(autoprefixer())
    .pipe(dest(`${output}/components`))

const buildStyles: TaskFunction = series(buildFull, buildCommon, buildComponents, copyFonts)

export default buildStyles

// Allow running this file directly with Node strip-types.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  buildStyles(error => {
    if (error) {
      console.error(error)
      process.exitCode = 1
    }
  })
}
