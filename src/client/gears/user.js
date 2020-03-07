
class User {
	constructor(userData) {
		if(userData) {
			this.userName = userData.userName;
			this.displayName = userData.displayName;
			this.mail = userData.mail;
			this.picture = userData.picture;
			this.roles = userData.roles;
		} else {
			this.userName =
			this.displayName =
			this.mail =
			this.picture = '';
			this.roles = ['guest'];
		}
	}

	isGuest() {
		return this.roles.includes('guest');
	}
}

/****************************************************************************************/

export default User;
