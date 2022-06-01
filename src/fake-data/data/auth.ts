import Mock from '../mock';
import jwtDecode from 'jwt-decode';
import { myToken, UserList } from '../../types';

const jwtEncode = require('jwt-encode');

const JWT_SECRET = 'jwt_secret_key';
const date = new Date();
date.setDate(date.getDate() + 7);
const JWT_EXPIRES_IN = date;

const userList: UserList[] = [
  {
    id: 1,
    name: 'Duc admin',
    username: 'admin_duc',
    email: 'admin@gmail.com',
    password: '12345678',
    age: 22
  }
];

Mock.onPost('/api/auth/login').reply(async (config: { data: string }) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const { email, password } = JSON.parse(config.data);
    const user = userList.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      return [400, { status: 404, message: 'Invalid email or password' }];
    }
    const accessToken = jwtEncode(
      { user_id: user.id, exp: JWT_EXPIRES_IN },
      JWT_SECRET
    );

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

Mock.onGet('/api/auth/profile').reply(
  (config: { headers: { Authorization: any } }) => {
    try {
      const { Authorization } = config.headers;
      if (!Authorization) {
        return [401, { message: 'Invalid Authorization token' }];
      }

      const accessToken = Authorization.split(' ')[1];

      const decodedToken = jwtDecode<myToken>(accessToken);
      const user = userList.find((u) => u.id === decodedToken.user_id);

      if (!user) {
        return [401, { message: 'Invalid authorization token' }];
      }

      return [
        200,
        {
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
      return [500, { message: 'Internal server error' }];
    }
  }
);
