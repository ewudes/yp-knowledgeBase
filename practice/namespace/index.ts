namespace('a.b.c.d.e') // "{"a":{"b":{"c":{"d":{"e":{}}}}}}"

function namespace(value) {
  return value.split('.').reduceRight((b, a) => {
    let res = {};
      return res[a] = b, res;
  },{});
}

export default namespace