const express = require('express');
const glob = require('fast-glob');


console.log('Starting server, please wait warmly...\n');

const app = express();

app.use(express.static('./public'));

const routes = `${__dirname}/routes/**/*`.replace(/\\/g, '/');

glob.sync(routes).forEach(file => {
	const router = express.Router();
	// eslint-disable-next-line global-require
	require(file)(router);
	app.use(router);
});

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}!\n`);
});
