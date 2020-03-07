
class SystemResolver {
	constructor() {
	}

	async bearer(parent, args, context) {
		return context.config.auth.bearer;
	}

	resolvers() {
		return {
			Query: {
				bearer: this.bearer
			}
		};
	}
}

/****************************************************************************************/

export default SystemResolver;
