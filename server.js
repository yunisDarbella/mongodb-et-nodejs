//Log nous permettant de nous assurer que notre serveur tourne dans la console
console.log('May Node be with you')
//Next, we use express in server.js by requiring it.
const express = require('express');
const app = express();
//Methode permettant au browser de communiquer avec notre serveur sur le port 3000
app.listen(3000, function() {
  console.log('listening on 3000')
})
/*VERSION DEMO/TEST
//Lors de connexion sur l'url de base...
app.get('/', function(req, res) {
  //...On retourne un hello world au browser
  res.send('Hello World')
})
// Note: request and response are usually written as req and res respectively.
*/
//Lors de connexion à la base de notre app
app.get('/', (req, res) => {
  //On lui renvoie la page d'index
  res.sendFile('C:/Users/Yunis/Desktop/backup/tuto web/mongodb-et-nodejs' + '/index.html')
})
