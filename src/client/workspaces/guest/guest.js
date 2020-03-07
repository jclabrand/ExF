
import React from 'react';

import guest from './guest.jsx';

/****************************************************************************************/

class Guest extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return guest.call(this);
	}
}

/****************************************************************************************/

export default Guest;
