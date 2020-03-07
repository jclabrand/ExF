
import http from 'http';
import path from 'path';

import express from 'express';
import jsonfile from 'jsonfile';
import { renderToString } from 'react-dom/server';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';

import Auth from '../gears/auth';

import ViewsControlller from '../controllers/views-controller';

import Routes from './routes';
import ApiCore from './api-core';

/****************************************************************************************/

class App {
	constructor() {
		this.config = jsonfile.readFileSync(path.join(__dirname, 'config.json'));

		this.express = express();
        
		this.init();
	}

	init() {
		this.controller = {
			views: new ViewsControlller()
		};

		this.auth = new Auth(this.config.auth);

		this.routes = new Routes(this);
		this.api = new ApiCore();

		this.graphql = new ApolloServer({
			schema: this.api.schema,
			context: async ({req}) => ({
				config: this.config,
				req: {
					headers: req.headers,
					body: req.body
				},
				auth: this.auth,
			})
		});

		this.express.use(cors());
		this.express.use(express.static(path.join(__dirname, 'assets')));
		this.express.use(this.onRequest.bind(this));
		this.graphql.applyMiddleware({ app: this.express });
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
