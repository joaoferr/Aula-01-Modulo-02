import express from 'express';
const app = express();
const port = 3000;
const fs = require('fs');

function verCidades() {
  console.log('1');
  let allCities;
  fs.readFile('./Cidades.json', 'utf8', (err, data) => {
    allCities = JSON.parse(data);
    console.log('2');
    //console.log(allCities);
  });
  console.log('3');
  console.log(allCities);
}

verCidades();

app.get('/', (req, res) => res.send('Hello Wolrd!'));

app.listen(port, () => {
  console.log('app listen on port: ' + port);
});
