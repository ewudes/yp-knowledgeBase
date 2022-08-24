function isPropertyExistFn(obj, key) {
  if (obj[key] !== undefined) return true
  return false
}

function zip(...arguments) {
  const result = arguments.reduce((newObj, nestedObj) => {
    for (const [key, value] of Object.entries(nestedObj)) {
      const isPopertyExist = isPropertyExistFn(newObj, key)
        if (!isPopertyExist) newObj[key] = value
      }
    return newObj
  }, {})
  return result
}

// Пример работы
const objects = [
{ foo: 5, bar: 6 },
{ foo: 13, baz: -1 } // foo - повторяющийся ключ
];

zip(...objects); // { foo: 5, bar: 6, baz: -1 }