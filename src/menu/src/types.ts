export const menuProps = {
  mode: {
    type: String,
    default: 'vertical'
  },
  defaultActive: {
    type: String,
    default: ''
  },
  defaultOpeneds: Array,
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    default: 'hover'
  },
  collapse: Boolean,
  backgroundColor: { type: String },
  textColor: { type: String },
  activeTextColor: { type: String }
}
