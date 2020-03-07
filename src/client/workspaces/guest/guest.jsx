
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Navbar, NavMenu, NavLink } from '../../components/navbar/navbar';

import Home from '../../modules/stage/home/home';
import NotFound from '../../modules/stage/not-found/not-found';

/****************************************************************************************/

function guest() {
	return (
		<div className="workspace">
			<header>
				<Navbar>
					<NavMenu>
						<NavLink text="Inicio" to="/"/>
					</NavMenu>
				</Navbar>
			</header>
			<main>
				<Switch>
					<Route exact={true} path="/" component={Home}/>

					<Route component={NotFound}/>
				</Switch>
			</main>
			<footer>

			</footer>
		</div>
	);
}

/****************************************************************************************/

export default guest;
