trim('  abc  '); // => 'abc'
trim('-_-abc-_-', '_-'); // => 'abc'
trim('\xA0foo'); // "foo"
trim('\xA0foo', ' '); // " foo"
trim('-_-ab c -_-', '_-'); // ab c

function trim(str:string,arg?:string): string{
  let argum = '';
  if(arg) {
    argum = arg.split('').join('|');
  }

  let rtrim = `[\\s${argum}]`;

  let regexp = new RegExp(rtrim, 'g');
  let result = str.replace(regexp,'');

  return result;
}

['  foo  ', '  bar  '].map(value => trim(value)); // => ['foo', 'bar']

export default trim;