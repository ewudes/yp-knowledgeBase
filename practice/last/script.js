// [1, 2, 3, 4] => 4

function last(list) {
  return Array.isArray(list) ? list[list.length - 1] : undefined
}