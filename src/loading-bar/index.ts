import LoadingBar from './src/instance'

LoadingBar.install = app => {
  app.config.globalProperties.$loadingBar = LoadingBar
}

export default LoadingBar
