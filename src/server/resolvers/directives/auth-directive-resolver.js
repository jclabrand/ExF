
class AuthDirectiveResolver {
	constructor() {
	}

	async authorized(next, source, params, context) {
		let req = context.req,
			auth = context.auth,
			db = context.db;

		if(req.headers && req.headers.authorization) {
			let authData = req.headers.authorization.split(' '),
				user = await auth.authorize(authData[0], authData[1], db);

			/* eslint-disable require-atomic-updates */
			context.user = user;
			return next();
		}
		else throw { message: 'El usuario no tiene credenciales' };
	}

	resolvers() {
		return {
			authorized: this.authorized,
			hasRole: this.hasRole
		};
	}
}

/****************************************************************************************/

export default AuthDirectiveResolver;
