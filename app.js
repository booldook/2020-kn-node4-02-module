const path = require('path');
const express = require('express');
const { moment, nowDateIso, nowDateKorean } = require('./modules/date');
// console.log(  nowDateIso() );
// console.log(  nowDateKorean()  );
// console.log(  moment );

const memberRouter = require('./routes/member');
const notFound = path.join(__dirname, './public/404.html');

const app = express();
app.listen(3000, () => { console.log('http://127.0.0.1:3000'); });

// app.set('view engine', 'ejs');
app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
	req.greeting = 'Hello';
	next();
});

app.use('/', express.static(path.join(__dirname, './public')));

app.get('/sample', (req, res, next) => {
	// res.send('');
	// res.sendFile('절대경로');
	// res.redirect('/member');
	res.render('./sample.pug', {title: "PUG 연습"});
});

app.get('/book', (req, res, next) => {
	const pug = { books: [
			{id: 1, title: "별주부전", content: "거북이가 간을..."},
			{id: 2, title: "홍길동전", content: "아버지를 아버지라..."},
			{id: 3, title: "심청전", content: "아버지 심청이가..."},
		] };
	res.render('./book.pug', pug);
})

app.use('/member', memberRouter);

app.get('/time', (req, res, next) => {
	res.send(`<h1>${req.greeting} / ${nowDateIso()}</h1>`);
	// next();
});

app.use((req, res, next) => {
	res.sendFile(notFound);
	// res.redirect('/404.html');
});