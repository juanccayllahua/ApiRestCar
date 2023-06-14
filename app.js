const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/car', (req, res) => {
    console.log('invocando_---```>>')
    res.send('carros!');

  });

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
