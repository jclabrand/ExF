
import React from 'react';
import ReactDOM from'react-dom';

import { BrowserRouter } from 'react-router-dom';

import Spa from './spa.jsx';

import '../styles/main.scss';

/****************************************************************************************/

class App {
	constructor() {
		document.addEventListener('DOMContentLoaded', this.onDOMContentLoaded.bind(this));
	}

	onDOMContentLoaded() {
		this.mainSection = window.document.getElementById('app-main');

		this.render();
	}

	render() {
		return ReactDOM.render(
			<BrowserRouter>
				<Spa/>
			</BrowserRouter>,
			this.mainSection
		);
	}
}

/****************************************************************************************/

export default App;
