function isEqual(a: object, b: object): boolean {
  const pull = new Map()

  const result = isEqualMaster(a, b)

  pull.clear()

  return result

  function isEqualMaster (a: any, b: any) {
    if (pull.has(a)) {
      return pull.get(a) === b
    }

    const typeA = getTypeOf(a)
    const typeB = getTypeOf(b)

    if (typeA !== typeB) {
      return false
    }

    if (isPrimitiveType(typeA)) {
      if (typeA === "Number") {
        if (isNaN(a) || isNaN(b)) {
          return isNaN(b) && isNaN(b)
        }
      }

      return a === b
    }

    if (a === b) {
      return true
    }

    pull.set(a, b)
    pull.set(b, a)

    if (typeA === 'Array') {
      if (a.length !== b.length) {
        return false
      }

      for (let i = 0; i < a.length; i++) {
        if (!isEqualMaster(a[i], b[i])) {
          return false
        }
      }

      return true
    }

    else {
      const kyesA = Object.keys(a)
      const kyesB = Object.keys(b)

      if (kyesA.length !== kyesB.length) {
        return false
      }

      for (const key of kyesA) {
        if (!kyesB.includes(key)) {
          return false
        }
      }

      for (const key of kyesA) {
        if (!isEqualMaster(a[key], b[key])) {
          return false
        }
      }

      return true
    }
  }

  function getTypeOf (x: any) {
    return Object.prototype.toString.call(x).slice(8, -1)
  }

  function isPrimitiveType (x: any) {
    return ["Null", "Undefined", "Number", "String", "Boolean", "BigInt", "Symbol"].includes(x)
  }
}

export default isEqual

const a = {a: 1};
const b = {a: 1};
isEqual(a, b); // true