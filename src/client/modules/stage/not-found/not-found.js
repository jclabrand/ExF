
import React from 'react';

import notFound from './not-found.jsx';

/****************************************************************************************/

class NotFound extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return notFound.call(this);
	}
}

/****************************************************************************************/

export default NotFound;
