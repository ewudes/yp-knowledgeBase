// Не забыть в тестах проверить [Object object] и 
// кейсы вида {a: [], b: {c: 123, d: {}}} и 
// невалидные значения вида чисел и строк
 
// аналог lodash.invert
// { a: 1 } => { 1: 'a' }
 
function invert(obj) {
// Здесь все элементы-объекты станут toString и будет [Object object] ключом, а значением последний ключ исходного объекта с объектом-значением
  return Object.keys(obj).reduce((result, item) => ({
    ...result,
    [obj[item]]: item,
  }), {});
}
