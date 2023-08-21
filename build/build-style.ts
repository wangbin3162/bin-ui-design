import { series, dest, src } from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import postcss from 'gulp-postcss'
import cleanCSS from 'gulp-clean-css'

import { compRoot, styleRoot, output, pkgPath } from './util-path'

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
    .pipe(dest(`${pkgPath}/lib/src`))
    .pipe(dest(`${pkgPath}/es/src`))

export default series(buildFull, buildCommon, buildComponents, copyFonts)
