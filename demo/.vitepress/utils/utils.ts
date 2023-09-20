interface SidebarType {
  text: string
  link: string
  icon?: string
  alias?: string
  items?: SidebarType[]
}

/**
 * 转换侧边栏类型
 * @param list
 * @param total 是否需要计算
 * @returns
 */
export function formatSidebar(list: SidebarType[], total: boolean = false) {
  return list.map(group => ({
    text: group.text + (total ? ` (${group.items.length})` : ''),
    items: group.items.map(i => {
      const item = { text: '', link: i.link }
      if (i.icon) item.text += `<i class="b-iconfont b-icon-${i.icon}"></i>`
      item.text += i.text
      if (i.alias) item.text += `<span>${i.alias}</span>`
      return item
    })
  }))
}
