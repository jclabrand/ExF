
import React from 'react';

/****************************************************************************************/

class NavMenu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className="nav-menu">
				{this.props.children}
			</ul>
		);
	}
}

/****************************************************************************************/

export default NavMenu;
