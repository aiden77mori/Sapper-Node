import sirv from 'sirv';
// import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { json, urlencoded } from 'body-parser';

const express = require('express');
const cors = require('cors');

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express() // You can also use Polka	
	.use(
		compression({ threshold: 0 }),
		json(),
		sirv('static', { dev }),
		sapper.middleware(),
		cors(),
		urlencoded({ extended: false }),
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});