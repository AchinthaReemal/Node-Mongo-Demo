/**
 * Created by achintha on 10/4/16.
 */

const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Demo listening on port 3000');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})