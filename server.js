/////////////////////////////////////////////////////////TEST INITIAL////////////////////////////////////////
//Log nous permettant de nous assurer que notre serveur tourne dans la console lorsqu'on lance node server.js
//Il s'agit du tout premier test à faire. Ce dernier nous permet de nous assurer du bon fonctionnement de notre serveur node
//console.log('May Node be with you')

//////////////////////////////////////////////////DEFINITION DES CONSTANTES/////////////////////////////////
//On spécifie que que server.js utilise express
const express = require('express');
//On concaténe const express = require('express') dans app pour rendre le code suivant plus léger
const app = express();
//On créée une variable pour le middleware body parser nous permettant d'interpréter les données des formulaire
const bodyParser= require('body-parser')
//Variable de connexion au client mongoDB
const MongoClient = require('mongodb').MongoClient

/////////////////////////////////////////////////PARAMETRAGE DES CONSTANTES////////////////////////////////////
//Méthode nous permettant de nous connecter à notre BD sur le cloud
var db

MongoClient.connect('mongodb://yunis:test@ds139288.mlab.com:39288/star-wars-quotes', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
})
//Methode permettant au browser de communiquer avec notre serveur sur le port 3000
app.listen(3000, function() {
  console.log('listening on 3000')
})
//La méthode urlencoded couplée à body-parser indique à body-parser d’éxtraire les données des éléments <form> afin de les ajouter à la propriété body dans l’objet request
app.use(bodyParser.urlencoded({extended: true}))

////////////////////////////////////////////////////////GET////////////////////////////////////////////////////////
/*TEST PERMETTANT D'AFFICHER UN LOG LORS DE LA CONNEXION SUR L'URL DE BASE
//Lors de connexion sur l'url de base...(LOCALHOST:3000)
app.get('/', function(req, res) {// Note: request and response are usually written as req and res respectively.
  //...On retourne un hello world au browser
  res.send('Hello World')
})*/
//Lors de connexion à la base de notre app (racine LOCALHOST:3000)
app.get('/', (req, res) => {
  //On lui renvoie la page d'index
  res.sendFile('C:/Users/Yunis/Desktop/backup/tuto web/mongodb-et-nodejs' + '/index.html')
})

//////////////////////////////////////////////////////////////POST////////////////////////////////////////////////
//Lors de l'utilisation du formulaire avec l'action quotes
app.post('/quotes', (req, res) => {
  //On affiche des logs de tests
  //console.log('Hellooooooooooooooooo!')
  //console.log(req.body)
  db.collection('quotes').save(req.body, (err, result) => {
  if (err) return console.log(err)

  console.log('saved to database')
  res.redirect('/')
})
})
