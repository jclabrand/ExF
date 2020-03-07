
import express from 'express';

/****************************************************************************************/

class Routes {
	constructor(app) {
		this.router = express.Router();

		let views = app.controller.views;

		this.router.use(views.main.bind(views));
	}
}

/****************************************************************************************/

export default Routes;
