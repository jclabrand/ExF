
import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Guest from '../workspaces/guest/guest';

import User from '../gears/user';

/****************************************************************************************/

class Spa extends React.Component {
	constructor(props) {
		super(props);

		this.query = {
			app: gql`
				query app {
					bearer
				}
			`,
			currentUser: gql`
				query currentUser {
					currentUser {
						userName displayName mail roles
					}
				}
			`
		};
	}

	render() {
		return (
			<Query query={this.query.app} errorPolicy="all">
				{({ loading, error, data }) => {
					if(loading) return (<div>Cargando...</div>);
					if(error) return (<div>Error</div>);

					window.app.bearer = data.bearer;

					return (
						<Query query={this.query.currentUser} errorPolicy="all" notifyOnNetworkStatusChange={true}>
							{({ loading, error, data, refetch  }) => {
								
								let user = window.user = new User();

								if(user.isGuest()) return (<Guest/>);
								else return null;
							}}
						</Query>
					);
				}}
			</Query>
		);
	}
}

/****************************************************************************************/

export default Spa;
