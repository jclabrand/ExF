
import React from 'react';

import MainView from '../views/main-view.jsx';

/****************************************************************************************/

class ViewsControlller {
	constructor() {
		this.assetsVersion = '0.0.1';
	}

	main(req, res) {
		res.render(<MainView assetsVersion={this.assetsVersion}/>);
	}
}

/****************************************************************************************/

export default ViewsControlller;
