import { shallowReactive, createVNode, nextTick, render, isVNode } from 'vue'
import { MessageContext, CreateMessageProps } from './types'
import MessageConstructor from './Message.vue'
import { transferIncrease } from '../../_utils/config'
import isServer from '../../_utils/isServer'

const instances: MessageContext[] = shallowReactive([])
let seed = 1

function close(id, userOnClose) {
  const idx = instances.findIndex(({ vm }) => vm.component.props.id === id)
  if (idx === -1) return
  const { vm, $el } = instances[idx]
  if (!vm) return
  userOnClose?.(vm)
  const removedHeight = vm.el.offsetHeight
  render(null, $el)
  nextTick(() => {
    document.body.removeChild($el)
  })
  instances.splice(idx, 1)
  // adjust other instances vertical offset
  const len = instances.length
  if (len < 1) return
  for (let i = idx; i < len; i++) {
    const pos = parseInt(instances[i].vm.el.style['top'], 10) - removedHeight - 16

    instances[i].vm.component.props.offset = pos
    instances[i].vm.component.props.vertOffset = pos
  }
}

function closeAll() {
  // 手动调用删除，其实就是手动的调整组件中 visible 的值
  // close 是通过 expose 传出来的
  instances.forEach(instance => {
    // instance.vm.exposed
    instance.vm.component.exposed!.close()
  })
}

const Message = (opts: CreateMessageProps | string) => {
  if (isServer) return
  if (typeof opts === 'string') {
    opts = {
      message: opts
    }
  }
  let options = opts

  let verticalOffset = opts.offset || 20
  instances.forEach(({ vm }) => {
    verticalOffset += (vm.el.offsetHeight || 42) + 16
  })
  verticalOffset += 16

  const id = `message_${seed++}`
  const userOnClose = options.onClose

  options = {
    id,
    offset: verticalOffset,
    zIndex: transferIncrease(),
    ...options,
    onClose: () => {
      close(id, userOnClose)
    }
  }

  const container = document.createElement('div')

  container.className = `container_${id}`

  const message = options.message

  const vm = createVNode(
    MessageConstructor,
    options,
    isVNode(options.message) ? { default: () => message } : null
  )
  render(vm, container)
  instances.push({ vm, $el: container })
  document.body.appendChild(container)
  return {
    close: options.onClose
  }
}

;['info', 'success', 'warning', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options,
        type
      }
    } else {
      options.type = type
    }
    return Message(options)
  }
})

Message.closeAll = closeAll

export default Message
