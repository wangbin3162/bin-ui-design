<template>
  <div flex>
    <div class="p10" style="width: 300px; border-right: 1px solid #eeeeee">
      <b-tag type="primary">新增移除</b-tag>
      <b-divider style="margin: 8px 0"></b-divider>
      <b-tree ref="tree" :data="data" :render="renderContent"></b-tree>
    </div>
    <div class="p10" style="width: 300px; border-right: 1px solid #eeeeee">
      <b-tag type="primary">下拉菜单</b-tag>
      <b-divider style="margin: 8px 0"></b-divider>
      <b-tree :data="data1" :render="renderContent1"></b-tree>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Message, BDropdown, BDropdownMenu, BDropdownItem } from 'bin-ui-design'

const data = ref([
  {
    title: 'parent 1',
    expand: true,
    render: ({ root, node, data }) => {
      return h(
        'span',
        {
          style: {
            display: 'inline-flex',
            justifyContent: 'space-between',
            width: '100%'
          }
        },
        [
          h('span', data.title),
          h('i', {
            class: ['b-iconfont', 'b-icon-plus-square-fill'],
            style: { fontSize: '16px', color: '#1089ff', marginRight: '4px' },
            onClick: () => {
              append(data)
            }
          })
        ]
      )
    },
    children: [{ title: 'child 1-1' }, { title: 'child 1-2' }]
  }
])
const data1 = ref([
  {
    title: '导航',
    icon: 'apartment',
    expand: true,
    children: [
      { title: '导航菜单', icon: 'menu' },
      { title: '图钉', icon: 'pushpin' },
      { title: '锚点', icon: 'attachment' },
      { title: '面包屑', icon: 'right' },
      { title: '标签页', icon: 'project' }
    ]
  }
])

function append(node) {
  const children = node.children || []
  node.expand = true
  children.push({ title: 'new node' })
  node.children = children
  data.value = [...data.value]
}
function remove(root, node, data) {
  console.log(root, node, data)
  const parentKey = root.find(el => el === node).parent
  const parent = root.find(el => el.nodeKey === parentKey).node
  const index = parent.children.indexOf(data)
  parent.children.splice(index, 1)
}

function renderContent({ root, node, data }) {
  return h(
    'span',
    {
      style: { display: 'inline-flex', justifyContent: 'space-between', width: '100%' }
    },
    [
      h('span', { class: 't-ellipsis', style: { width: 'calc(100% - 36px)' } }, data.title),
      h('span', { style: { width: '36px' } }, [
        h('i', {
          class: ['b-iconfont', 'b-icon-plus-square-fill'],
          style: { fontSize: '16px', color: '#5d6d7e' },
          onClick: e => {
            e.stopPropagation()
            append(data)
          }
        }),
        h('i', {
          class: ['b-iconfont', 'b-icon-minus-square-fill'],
          style: { fontSize: '16px', color: '#f5222d' },
          onClick: e => {
            e.stopPropagation()
            remove(root, node, data)
          }
        })
      ])
    ]
  )
}

function renderContent1({ root, node, data }) {
  const inline = [
    h(
      'span',
      {
        class: 't-ellipsis',
        style: { width: 'calc(100% - 24px)' },
        title: `${data.title}`
      },
      [
        h('i', {
          class: ['b-iconfont', `b-icon-${data.icon}`],
          style: { marginRight: '4px' }
        }),
        data.title
      ]
    ),
    h(
      BDropdown,
      {
        trigger: 'click',
        appendToBody: true,
        placement: 'bottom-start',
        onCommand: name => {
          console.log(name, data)
          Message(`${name} node: [${data.title}]`)
        }
      },
      {
        default: () => h('i', { class: ['b-iconfont', 'b-icon-setting', 'setting-action'] }),
        dropdown: () =>
          h(BDropdownMenu, () => [
            h(BDropdownItem, { name: 'edit' }, () => [
              h('i', { class: 'b-iconfont b-icon-edit-square' }),
              '编辑'
            ]),
            h(BDropdownItem, { name: 'delete' }, () => [
              h('i', { class: 'b-iconfont b-icon-delete' }),
              '删除'
            ])
          ])
      }
    )
  ]
  return h('span', { style: { width: '100%', fontSize: '12px' }, flex: 'main:justify' }, inline)
}
</script>
