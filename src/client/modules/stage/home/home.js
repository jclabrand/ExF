
import React from 'react';

import home from './home.jsx';

/****************************************************************************************/

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return home.call(this);
	}
}

/****************************************************************************************/

export default Home;
