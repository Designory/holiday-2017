const express = require('express');
const app = express();
const compression = require('compression');
const basicAuth = require('express-basic-auth');
const cors = require('cors');
const sslRedirect = require('heroku-ssl-redirect');
const robots = require('express-robots');

// redirect if http, to https
app.use(sslRedirect());

// use cors
app.use(cors());

// gzip
app.use(compression({
	filter: function () { return true; }
}));

// disable crawling anything but production
if (process.env.NODE_ENV !== 'production') {
	app.use(robots({UserAgent: '*', Disallow: '/'}));
}


app.use(express.static('dist'));
app.use('/static', express.static('static'));

// authenticate
if (process.env.PASSWORD && process.env.USERNAME) {
	authObj = {};
	authObj[process.env.USERNAME] = process.env.PASSWORD;
	app.use(basicAuth({
	    users: authObj,
	    challenge: true
	}));
}

app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port ${process.env.PORT || 3000}`))