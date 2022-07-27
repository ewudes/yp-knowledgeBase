// Express уже установлен, можно пользоваться
const express = require('express');
const PORT = 3000;

const app = express();
app.use(express.static(__dirname));
 
// Здесь нужно написать роут для отдачи статики
// Все пути считаются относительно переменной __dirname
// Подробнее про __dirname можно прочитать здесь https://nodejs.org/api/modules.html#modules_dirname

app.listen(PORT, () => {
  console.log(`Мой текст в логе после запуска ${PORT}!`);
});