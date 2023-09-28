let $ELEMENT = { zIndex: 2000 }

let transferIndex = 0

function transferIncrease() {
  return ++transferIndex + $ELEMENT.zIndex
}

const setConfig = option => {
  $ELEMENT = { ...$ELEMENT, ...option }
}
const getConfig = key => {
  return $ELEMENT[key]
}

export { transferIncrease, getConfig, setConfig }
