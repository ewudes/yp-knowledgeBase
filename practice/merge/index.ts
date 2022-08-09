type Indexed<T = unknown> = {
  [key in string]: T;
};

function merge(obj1: any, obj2: any): any {
  function rec(newObj: any, obj2: any) {
    for (let key in obj2) {
      if (typeof (obj2[key]) == "object") {
        rec(newObj[key],obj2[key]);
      } else {
        newObj[key] = obj2[key];
      }
    }
  }
  let newObj = Object.assign({},obj1);
  rec(newObj,obj2);
  return newObj;
}

export default merge

merge({a: {b: {a: 2}}, d: 5}, {a: {b: {c: 1}}});
/*
  {
    a: {
      b: {
        a: 2,
        c: 1,
      }
    },
    d: 5,
  }
*/