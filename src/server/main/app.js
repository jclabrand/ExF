
import http from 'http';
import path from 'path';

import express from 'express';
import jsonfile from 'jsonfile';
import { renderToString } from 'react-dom/server';

import ViewsControlller from '../controllers/views-controller';
import Routes from './routes';

/****************************************************************************************/

class App {
	constructor() {
		this.config = jsonfile.readFileSync(path.join(__dirname, 'config.json'));

		this.express = express();
		this.express.use(express.static(path.join(__dirname, 'assets')));
		this.express.use(this.onRequest.bind(this));
        
		this.init();
	}

	init() {
		this.controller = {
			views: new ViewsControlller()
		};

		this.routes = new Routes(this);

		this.express.use('/', this.routes.router);

		this.server = http.createServer(this.express);
		this.server.listen(this.config.port, this.onStart.bind(this));
	}

	onStart() {
		console.log('Server ready on port:', this.config.port);
	}

	onRequest(req, res, next) {
		res.render = view => res.send(renderToString(view));
		next();
	}
}

/****************************************************************************************/

export default App;
