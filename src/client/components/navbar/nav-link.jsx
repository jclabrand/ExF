
import React from 'react';
import { Link } from 'react-router-dom';

/****************************************************************************************/

class NavLink extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li>
				<Link to={this.props.to}>
					<div className="nav-link">
						{this.props.children}
						{this.props.text}
					</div>
				</Link>
			</li>
		);
	}
}

/****************************************************************************************/

export default NavLink;
