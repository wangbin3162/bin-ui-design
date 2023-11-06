export const menuProps = {
  mode: {
    type: String,
    default: 'vertical'
  },
  defaultActive: {
    type: String,
    default: ''
  },
  defaultOpeneds: {
    type: Array,
    default: () => []
  },
  uniqueOpened: {
    type: Boolean,
    default: false
  },
  router: {
    type: Boolean,
    default: false
  },
  menuTrigger: {
    type: String,
    default: 'hover'
  },
  collapse: Boolean,
  backgroundColor: {
    type: String,
    default: ''
  },
  textColor: {
    type: String,
    default: ''
  },
  activeTextColor: {
    type: String,
    default: ''
  }
}
