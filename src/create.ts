import { type App } from 'vue'
import version from './version'
import { setConfig } from './_utils/config'
import log from './_utils/log'
import config from '../package.json'

type ComponentType = any

export interface BUiInstance {
  version: string
  componentPrefix: string
  // eslint-disable-next-line no-unused-vars
  install: (app: App) => void
}

interface BUiCreateOptions {
  components?: ComponentType[]
  componentPrefix?: string
  directives?: any[]
}
// 组件自动注册，可以支持扩展前缀
function create({
  componentPrefix = 'B',
  components = [],
  directives = [],
  plugins = []
}: BUiCreateOptions = {}): BUiInstance {
  const installTargets: App[] = []
  function registerComponent(app: App, name: string, component: ComponentType): void {
    const newName = componentPrefix + name.slice(1)
    const registered = app.component(newName)
    if (!registered) {
      app.component(newName, component)
    }
  }
  function install(app: App, options = {}): void {
    if (installTargets.includes(app)) return
    installTargets.push(app)
    // 全局注册组件
    components.forEach(component => {
      const { name, alias } = component
      registerComponent(app, name, component)
      if (alias) {
        alias.forEach((aliasName: string) => {
          registerComponent(app, aliasName, component)
        })
      }
    })
    // 全局注册指令
    directives.forEach(item => {
      const { name, directive } = item
      app.directive(name, directive)
    })
    // 注册全局install
    plugins.forEach(plugin => {
      app.use(plugin)
    })

    // 注册全局函数和属性
    setConfig({ ...options })

    if (!options.disabledDoc) {
      log.printVersion(config.name, version, config.homepage)
    }
  }

  return {
    version,
    componentPrefix,
    install
  }
}

export default create
