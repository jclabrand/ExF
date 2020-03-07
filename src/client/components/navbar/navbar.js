
import React from 'react';

import navbar from './navbar.jsx';
import NavMenu from './nav-menu.jsx';
import NavLink from './nav-link.jsx';

/****************************************************************************************/

class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return navbar.call(this);
	}
}

/****************************************************************************************/

export { Navbar, NavMenu, NavLink };
