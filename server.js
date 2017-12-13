// var express = require('express');
// var server = express();
// server.use('/', express.static(__dirname + '/dist/'));
// server.listen(process.env.PORT || 3000);

console.log(process.env);

const express = require('express')
const app = express()

app.use(express.static('dist'))
//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port ${process.env.PORT || 3000}`))