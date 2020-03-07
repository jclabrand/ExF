
class UserResolver {
	constructor() {
	}

	async index() {
		return [];
	}

	async currentUser(parent, args, context) {
		return context.user;
	}

	async signin(parent, args, context) {
		try {
			let userPayload = await context.auth.authenticate(args),
				token = await context.auth.sign(userPayload);
			return { authorization: token };
		} catch(e) {
			throw e.message ? e : { message: 'Nombre de usuario o contraseña incorrectos' };
		}
	}

	async signout() {
		return ' ';
	}

	resolvers() {
		return {
			Query: {
				users: this.index,
				currentUser: this.currentUser.bind(this)
			},
			Mutation: {
				signin: this.signin,
				signout: this.signout
			}
		};
	}
}

/****************************************************************************************/

export default UserResolver;
