const DEFAULT_CHILDREN_KEY = 'children'

export function walkTreeRows(rows, callback, depth = 0, parentRow = null) {
  if (!Array.isArray(rows)) return

  rows.forEach(row => {
    callback(row, depth, parentRow)
    const children = row?.[DEFAULT_CHILDREN_KEY]
    if (Array.isArray(children) && children.length) {
      walkTreeRows(children, callback, depth + 1, row)
    }
  })
}

export function sortTreeRows(rows, compare) {
  if (!Array.isArray(rows)) return []

  rows.sort(compare)
  rows.forEach(row => {
    const children = row?.[DEFAULT_CHILDREN_KEY]
    if (Array.isArray(children) && children.length) {
      sortTreeRows(children, compare)
    }
  })

  return rows
}

export function flattenVisibleTreeRows(rows, options) {
  const { expandedKeySet, rowKey } = options
  const result = []

  const traverse = (list, depth = 0, parentKey = null) => {
    if (!Array.isArray(list)) return

    list.forEach(row => {
      const children = Array.isArray(row?.[DEFAULT_CHILDREN_KEY]) ? row[DEFAULT_CHILDREN_KEY] : []
      const currentKey = row[rowKey]

      row._depth = depth
      row._parentTreeKey = parentKey
      row._hasChildren = children.length > 0

      result.push(row)

      if (children.length && expandedKeySet.has(currentKey)) {
        traverse(children, depth + 1, currentKey)
      }
    })
  }

  traverse(rows)

  return result
}

export function collectExpandedTreeKeys(rows, rowKey) {
  const expandedKeys = []

  walkTreeRows(rows, row => {
    if (row?._expanded) {
      expandedKeys.push(row[rowKey])
    }
  })

  return expandedKeys
}
