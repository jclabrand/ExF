
import React from 'react';

import Guest from '../workspaces/guest/guest';

import User from '../gears/user';

/****************************************************************************************/

class Spa extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let user = window.user = new User();

		if(user.isGuest()) return (<Guest/>);

		return (
			<div className="workspace">
				FTF
			</div>
		);
	}
}

/****************************************************************************************/

export default Spa;
