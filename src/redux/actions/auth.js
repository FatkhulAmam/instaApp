import http from '../../helpers/http';
import qs from 'qs';

const signinAction = (data) => ({
  type: 'REGIS_USER',
  payload: http().post('auth/register', qs.stringify(data)),
});

const loginAction = (data) => ({
  type: 'AUTH_USER',
  payload: http().post('auth/login', qs.stringify(data)),
});

export {signinAction, loginAction};
