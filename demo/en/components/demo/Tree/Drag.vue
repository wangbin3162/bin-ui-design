<template>
  <div flex>
    <div class="p10" style="width: 300px; border-right: 1px solid #eeeeee">
      <b-tag type="primary">Basic Drag Sort</b-tag>
      <b-divider style="margin: 8px 0"></b-divider>
      <b-tree
        ref="treeRef"
        :data="data"
        draggable
        default-expand
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
      ></b-tree>
    </div>
    <div class="p10" style="width: 300px; border-right: 1px solid #eeeeee">
      <b-tag type="primary">Custom Function Config</b-tag>
      <b-divider style="margin: 8px 0"></b-divider>
      <b-tree
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
        :data="data1"
        :render="renderContent1"
        draggable
        lock-select
        default-expand
      ></b-tree>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Message, BDropdown, BDropdownMenu, BDropdownItem } from 'bin-ui-design'

const data = ref([
  {
    title: 'Level 1 1',
    children: [
      {
        title: 'Level 2 1-1',
        children: [{ title: 'Level 3 1-1-1' }, { title: 'Level 3 1-1-2' }]
      },
      {
        title: 'Level 2 1-2',
        children: [{ title: 'Level 3 1-2-1' }, { title: 'Level 3 1-2-2' }]
      }
    ]
  },
  {
    title: 'Level 1 2',
    children: [
      {
        title: 'Level 2 2-1',
        children: [{ title: 'Level 3 2-1-1' }, { title: 'Level 3 2-1-2' }]
      },
      {
        title: 'Level 2 2-2',
        children: [{ title: 'Level 3 2-2-1' }, { title: 'Level 3 2-2-2' }]
      }
    ]
  }
])
const data1 = ref([
  {
    title: 'Data Dimensions',
    nodeType: 'root',
    children: [
      {
        title: 'Country Hierarchy',
        nodeType: 'hierarchy',
        children: [
          {
            field: 'country',
            title: 'Country',
            dataType: 'STRING',
            type: 'dimension',
            nodeType: 'attribute',
            tableId: '0001'
          },
          {
            field: 'province',
            title: 'Province',
            dataType: 'STRING',
            type: 'dimension',
            nodeType: 'attribute',
            tableId: '0001'
          },
          {
            field: 'city',
            title: 'City',
            dataType: 'STRING',
            type: 'dimension',
            nodeType: 'attribute',
            tableId: '0001'
          }
        ]
      },
      {
        title: 'Department',
        nodeType: 'folder',
        children: [
          {
            field: 'dept_code',
            title: 'Department Code',
            dataType: 'STRING',
            type: 'dimension',
            nodeType: 'attribute',
            tableId: '0002'
          },
          {
            field: 'dept_name',
            title: 'Department Name',
            dataType: 'STRING',
            type: 'dimension',
            nodeType: 'attribute',
            tableId: '0002'
          }
        ]
      }
    ]
  },
  {
    title: 'Data Measures',
    nodeType: 'root',
    children: [
      {
        title: 'Default',
        nodeType: 'folder',
        children: [
          {
            field: 'count',
            title: 'Statistics',
            dataType: 'NUMBER',
            type: 'measure',
            nodeType: 'attribute',
            tableId: '0001'
          }
        ]
      },
      {
        title: 'Department',
        nodeType: 'folder',
        children: [
          {
            field: 'parent_dept',
            title: 'Parent Department',
            dataType: 'NUMBER',
            type: 'measure',
            nodeType: 'attribute',
            tableId: '0002'
          },
          {
            field: 'level',
            title: 'Level',
            dataType: 'NUMBER',
            type: 'measure',
            nodeType: 'attribute',
            tableId: '0002'
          }
        ]
      }
    ]
  }
])

const treeRef = ref(null)

function allowDrop(draggingNode, dropNode, type) {
  if (dropNode.nodeType === 'attribute') {
    return type !== 'inner'
  } else {
    return dropNode.nodeType !== 'root'
  }
}

function allowDrag(draggingNode) {
  // Restrict drag nodes
  return draggingNode.nodeType === 'attribute'
}

function renderContent1({ root, node, data }) {
  const iconMap = {
    root: '',
    hierarchy: 'cluster',
    folder: 'folder',
    dimension: 'deploymentunit',
    measure: 'linechart'
  }
  const colorMap = {
    root: '#1089ff',
    hierarchy: '#1089ff',
    folder: '#35495e',
    dimension: '#1089ff',
    measure: '#52c41a'
  }
  const iconType = data.nodeType === 'attribute' ? data.type : data.nodeType
  const inline = [
    h(
      'span',
      {
        class: 't-ellipsis',
        style: { width: 'calc(100% - 24px)' },
        title: `${data.title}-(${data.field ?? ''})`
      },
      [
        h('i', {
          class: ['b-iconfont', `b-icon-${iconMap[iconType]}`],
          style: { fontSize: '16px', marginRight: '4px', color: colorMap[iconType] }
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
              'Edit'
            ]),
            h(BDropdownItem, { name: 'delete' }, () => [
              h('i', { class: 'b-iconfont b-icon-delete' }),
              'Delete'
            ])
          ])
      }
    )
  ]
  return h('span', { style: { width: '100%', fontSize: '12px' }, flex: 'main:justify' }, inline)
}

function handleDragStart(node, ev) {
  console.log('drag start', node)
}
function handleDragEnter(draggingNode, dropNode, ev) {
  console.log('tree drag enter: ', dropNode.title)
}
function handleDragLeave(draggingNode, dropNode, ev) {
  console.log('tree drag leave: ', dropNode.title)
}
function handleDragEnd(draggingNode, dropNode, dropType, ev) {
  console.log('tree drag end: ', dropNode && dropNode.title, dropType)
}
function handleDrop(draggingNode, dropNode, dropType, ev) {
  console.log('tree drop: ', dropNode.title, dropType)
}
</script>
