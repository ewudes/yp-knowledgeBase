const express = require('express');
const app = express();
const PORT = 3000;

const API_PREFIX = '/my/common/api/path';
const API_PREFIX_LOCAL = 'http://localhost:3000';

app.get('/api/v1/text', (req, res) => {
  res.send('Hello, World!');
});

app.put('/api/v1/json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(201).send({"data": {"items": [1, 2, 3]}});
});

// Если мы сделаем POST-запрос сюда, то получим верный ответ
// Если отправим GET-запрос, то получим либо 405 HTTP ошибку, либо 404
app.post(`${API_PREFIX}/test`, (req, res) => {
  res.status(201).send('my text');
});

app.delete(`${API_PREFIX}/delete`, (req, res) => {
	res.setHeader('Content-Type', 'application/json');
  res.status(200).send({deleted: true});
});

app.listen(PORT, () => {
  console.log(`Мой текст и порт: ${PORT}!`);
});