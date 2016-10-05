/**
 * Created by achintha on 10/4/16.
 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

var database;
var dbUrl = 'mongodb://cake_user:1qaz2wsx@ds049466.mlab.com:49466/cake_it_workshop'

MongoClient.connect(dbUrl, (err, db) => {
    if (err)
        return console.log(err);
    database = db;
    app.listen(3000, () => {
        console.log('Demo Listening on 3030')
    })
})

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    database.collection('students').find().toArray(function (err, results) {
        console.log(results)
    })
});


app.post('/register', (req, res) => {
    database.collection('students').save(req.body, (err, result) => {
        if (err)
            return console.log(err);
        console.log('Student saved to database');
        res.redirect('/')
    })
});