import Mock from '../mock'
const sign = require('jwt-encode');

const JWT_SECRET = 'jwt_secret_key'
const JWT_VALIDITY = '7 days'

const userList = [
	{
		id: 1,
		name: 'Duc admin',
		username: 'admin_duc',
		email: 'admin@gmail.com',
		age: 22,
	}
];
Mock.onPost('/api/auth/login').reply(async (config: { data: string }) => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 1000))

		const { email } = JSON.parse(config.data);
		const user = userList.find((u) => u.email === email)
		if (!user) {
			return [400, {status: 404, message: 'Invalid email or password' }]
		}
		const accessToken = sign({ 'client_id': user.id, 'expires_in': JWT_VALIDITY }, JWT_SECRET);

		return [
			200,
			{
				accessToken,
				user: {
					id: user.id,
					email: user.email,
					name: user.name,
					age: user.age
				}
			}
		];

	} catch (err) {
		console.error(err);
		return [500, { message: 'Server error' }];
	}
});

