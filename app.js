const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;
const connection = mysql.createConnection({
  host: 'bdtargencar.cluster-ro-cptsd6gduasw.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'admin',
  password: 'admin1234.',
  database: 'holamund'
});




app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/car', (req, res) => {
    console.log('invocando_---```>>')
    
    connection.connect((error) => {
      if (error) {
        console.error('Error al conectar a la base de datos:', error);
      } else {
        console.log('Conexión exitosa a la base de datos');
    
        //Realiza una consulta a la base de datos
        connection.query('SELECT * FROM marcas_carros', (error, results) => {
          if (error) {
            console.error('Error al realizar la consulta:', error);
          } else {
            res.send(results);
            // console.log('Resultados de la consulta:', results);
          }
    
          // Cierra la conexión a la base de datos
          connection.end();
        });
      }
    });

    res.send('carros!');

  });

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
