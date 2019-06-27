
//Usando Singleton para manejar la base de datos.

var MongoClient = require('mongodb').MongoClient
  , async = require('async')

var state = {
  db: null,
}

var PORT = 80
var URL = "34.68.167.61"

var URI = `mongodb://${URL}:${PORT}`

exports.connect = function(done) {
  if (state.db) return done()

  MongoClient.connect(URI, function(err, client) {
    if (err) return done(err)
    state.db = client.db("nodeTest")
    done()
  })
}

exports.getDB = function() {
    console.log("Instancia pedida")
  return state.db
}
