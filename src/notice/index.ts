import Notice from './src/instance'

Notice.install = app => {
  app.config.globalProperties.$notice = Notice
}

export default Notice
