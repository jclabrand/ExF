
import jwt from 'jsonwebtoken';

/****************************************************************************************/

class Auth {
	constructor(config) {
		this.rsa = config.rsa;
		this.algorithm = config.algorithm;
		this.bearer = config.bearer.secret;
	}

	sign(payload) {
		let cert = this.rsa.private,
			alg = this.algorithm;

		return new Promise((resolve, reject) => {
			jwt.sign(payload, cert, { algorithm: alg }, (err, token) => {
				if(err) { reject(err); } else { resolve(token); }
			});
		});
	}

	verify(token) {
		let cert = this.rsa.public,
			alg = this.algorithm;

		return new Promise((resolve, reject) => {
			jwt.verify(token, cert, { algorithms: [alg] }, (err, payload) => {
				if(err) { reject(err); } else { resolve(payload); }
			});
		});
	}

	authenticate(userData) {
		throw { message: 'User not found' };
	}

	async authorize(bearer, token, db) {
		if(bearer === this.bearer) {
			let payload = await this.verify(token);
			return await this.onAuthorize(payload, db);
		}
		else throw { message: 'Portador inválido' };
	}

	async onAuthorize(jwt_payload, db) {
		throw { message: 'No database' };
	}
}

/****************************************************************************************/

export default Auth;
