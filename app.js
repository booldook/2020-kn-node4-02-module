const path = require('path');
const express = require('express');
const { moment, nowDateIso, nowDateKorean } = require('./modules/date');
// console.log(  nowDateIso() );
// console.log(  nowDateKorean()  );
// console.log(  moment );

const notFound = path.join(__dirname, './public/404.html');

const app = express();
app.listen(3000, () => { console.log('http://127.0.0.1:3000'); });

app.use('/', express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});

app.use((req, res) => {
  res.sendFile(notFound);
  //res.redirect('/404.html');
});