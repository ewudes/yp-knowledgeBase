const isObject = (obj: object) => {
  return (typeof obj === 'object' && obj !== null); 
}

function cloneDeep<T extends object = object>(obj: T) {
  let clone: {[key: string]: unknown} | T[];
  if (Array.isArray(obj)) {
    clone = [];
  } else if (isObject(obj)) {
    clone = {};
  } else {
    return obj;
  }
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value !== 'object') {
      if (Array.isArray(clone)) {
        clone.push(value);
      } else {
        clone[key]  = value;
      }
    } else {
      if (Array.isArray(clone)) {
        clone.push(cloneDeep(value));
      } else {
        clone[key] = cloneDeep(value);
      }
    }
  })
  return clone;
}

export default cloneDeep

const objects = [{ 'a': 1 }, { 'b': 2 }];
const deep = cloneDeep(objects);
if (Array.isArray(deep)) {
  console.log(deep[0] === objects[0]); // => false
}