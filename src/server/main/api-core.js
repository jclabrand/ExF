
import path from 'path';

import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import AuthDirectiveResolver from '../resolvers/directives/auth-directive-resolver';

import SystemResolver from '../resolvers/stage/system-resolver';
import UserResolver from '../resolvers/stage/user-resolver';

/****************************************************************************************/

class ApiCore {
	constructor() {
		this.schema = makeExecutableSchema({
			typeDefs: this.buildTypeDefs(),
			resolvers: this.buildResolvers(),
			directiveResolvers: this.buildDirectiveResolvers()
		});
	}

	buildTypeDefs() {
		let typesArray = fileLoader(path.join(__dirname, 'api'), { recursive: true });

		return mergeTypes(typesArray);
	}

	buildResolvers() {
		this.system = new SystemResolver();
		this.userResolver = new UserResolver();

		return mergeResolvers([
			this.system.resolvers(),
			this.userResolver.resolvers()
		]);
	}

	buildDirectiveResolvers() {
		this.auth = new AuthDirectiveResolver();

		return mergeResolvers([
			this.auth.resolvers()
		]);
	}
}

/****************************************************************************************/

export default ApiCore;
