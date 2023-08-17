import * as components from './components'

import * as directives from './_directives'

import create from './create'

const BinUI = create({
  components: Object.keys(components).map(key => components[key as keyof typeof components]),
  directives: Object.keys(directives).map(key => ({
    name: key,
    directive: directives[key as keyof typeof directives]
  }))
})

export default BinUI
export const install = BinUI.install
