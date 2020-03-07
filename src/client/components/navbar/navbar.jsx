
import React from 'react';

/****************************************************************************************/

function navbar() {
	return (
		<nav>
			<div className="nav-wrapper">
				{this.props.children}
			</div>
		</nav>
	);
}

/****************************************************************************************/

export default navbar;
