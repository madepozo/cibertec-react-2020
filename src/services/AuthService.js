import axios from 'axios';

const API = `${process.env.REACT_APP_API}/users`;

const getUserByEmail = (email) => {
	return axios.get(`${API}?email=${email}`);
}

const login = (email, password) => {
	return new Promise((resolve, reject) => {
		getUserByEmail(email)
			.then(response => {
				const [ user ] = response.data;

				if (user) {
					if (user.password === password) {
						resolve(user);
					}
				}

				reject(null);
			})
	});
}

export default {
	login
}