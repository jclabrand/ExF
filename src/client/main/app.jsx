
import React from 'react';
import ReactDOM from'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

import Spa from './spa.jsx';
import config from './config';

import '../styles/main.scss';

/****************************************************************************************/

class App {
	constructor() {
		document.addEventListener('DOMContentLoaded', this.onDOMContentLoaded.bind(this));
	}

	onDOMContentLoaded() {
		this.mainSection = window.document.getElementById('app-main');

		const authLink = setContext((_, context) => {
			const token = localStorage.getItem('authorization');

			return {
				headers: {
					authorization: `${window.app.bearer} ${token}`,
				}
			};
		});

		this.client = new ApolloClient({
			link: authLink.concat(new HttpLink({uri: config.GRAPHQL_API_URL})),
			cache: new InMemoryCache(),
		});

		window.app = {
			bearer: ''
		};

		this.render();
	}

	render() {
		return ReactDOM.render(
			<ApolloProvider client={this.client}>
				<BrowserRouter>
					<Spa/>
				</BrowserRouter>
			</ApolloProvider>,
			this.mainSection
		);
	}
}

/****************************************************************************************/

export default App;
