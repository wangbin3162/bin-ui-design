import Message from './src/instance'

Message.install = app => {
  app.config.globalProperties.$message = Message
}

export default Message
