/**
 * Created by achintha on 10/4/16.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var database;

// url of the mongodb database which we are using (username:cake_user , pw:1qaz2wsx)
var dbUrl = 'mongodb://cake_user:1qaz2wsx@ds049466.mlab.com:49466/cake_it_workshop';

//Connecting to the database
MongoClient.connect(dbUrl, function (err, db) {
    if (err) {
        return console.log(err);
    }
    database = db;
    //start server only when the database connection is a success
    app.listen(3000, function () {
        console.log('Demo Listening on 3030')
    })
});

//setting the view engine to EJS (Embedded JavaScript)
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

//route method to handle GET requests, which will serve an HTML
//file when the users access '/' route
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


// route method to handle POST requests which are generated when users
// submit form data. This will save the form data in a document created
// inside the 'students' collection.
app.post('/register', function (req, res) {
    database.collection('students').save(req.body, function (err, result) {
        if (err) {
            return console.log(err);
        }
        console.log('Student saved to database');
        res.redirect('/');
    })
});

// route method to handle GET requests which are generated when users
// access '/students' route. This will retrieve all the documents from
// 'students' collection and display in a table.
app.get('/students', function (req, res) {
    database.collection('students').find().toArray(function (err, results) {
        if (err) {
            return console.log(err);
        }

        //render the view file dynamically with the results array
        res.render('students.ejs', {students: results});
    })
});

