import TransitionEvents from '../../_utils/transition-events'

// 重置效果
function resetEffect(node: HTMLElement) {
  if (!node) {
    return
  }
  node?.parentNode && node.parentNode.removeChild(node)
  TransitionEvents.removeEndEventListener(node, onTransitionEnd)
}

function onTransitionEnd(e: Animation) {
  if (!e || e.animationName !== 'fadeEffect') {
    return
  }
  resetEffect(e.target)
}

export default {
  beforeMount(el: HTMLElement, binding) {
    el.addEventListener(
      'click',
      e => {
        const wavesColor = binding.value || 'rgba(0, 0, 0, 0.15)'
        const node = el
        if (node) {
          node.style.position = 'relative'
          node.style.overflow = 'hidden'
          const rect = node.getBoundingClientRect()
          const ripple = document.createElement('span')
          ripple.className = 'waves-ripple'
          ripple.style.height = ripple.style.width = `${Math.max(rect.width, rect.height)}px`
          node.appendChild(ripple)
          // 获得页面向左、向上卷动的距离
          const pageScroll = {
            left:
              window.pageXOffset ||
              document.documentElement.scrollLeft ||
              document.body.scrollLeft ||
              0,
            top:
              window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0
          }

          ripple.style.top = `${e.pageY - rect.top - ripple.offsetHeight / 2 - pageScroll.top}px`
          ripple.style.left = `${e.pageX - rect.left - ripple.offsetWidth / 2 - pageScroll.left}px`

          ripple.style.backgroundColor = wavesColor
          ripple.className = 'waves-ripple z-active'
          TransitionEvents.addEndEventListener(ripple, onTransitionEnd)
          return false
        }
      },
      false
    )
  }
}
