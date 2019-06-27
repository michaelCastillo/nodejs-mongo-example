// Configuraciones
var express = require('express');
var bodyParser = require("body-parser");
const app = express();
//Configuration for use Json data.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Setting up bd
var MongoClient = require('mongodb').MongoClient;
// Connection with mongoDB
var mongoPort = 80
var mongoIP = "34.68.167.61"
var db; // For future access to the DB
var server;
// Connection with Mongo on Google cloud machine.
var DBConn = require('./dbConnect')


// Services
const PORT = 5000;
DBConn.connect(()=>console.log("Conexion exitosa GET"))
// Starts connections with database.


app.get('/', (req,res)=>{
    console.log("First service! ");
    res.sendFile(__dirname + "/PresentationFile.html")
})

app.get('/articles' , (data,callback)=>{
    db = DBConn.getDB()
    db.collection("articles").find().toArray((err,articles)=>{
        console.log(articles);
        return callback.send(200,articles)
    })
    
})

app.post('/articlesCreate',(req, res) =>{
    var db = DBConn.getDB()
    db.collection('articles').save(req.body, (e,result) =>{
        if(e) console.log("Error! ",e);
        console.log("Create article successfully.")
        console.log("code: ",result);
        res.redirect("/");
    })
})
// exporting the server
app.listen(PORT, () => {
    
    console.log(`server running on port ${PORT}`)
  });  
module.exports = app




