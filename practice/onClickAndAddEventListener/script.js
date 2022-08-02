const btn = document.querySelector('.button');

const result = [];
btn.onclick = function() { 
  result.push('first event');
}
 
btn.addEventListener('click', () => {
  result.push('second event');
});

btn.click(); // result -> ["first event", "second event"]