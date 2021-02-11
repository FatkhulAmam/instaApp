import http from '../../helpers/http';
import qs from 'qs';

const loginAction = (data) => ({
  type: 'AUTH_USER',
  payload: http().post('auth/login', qs.stringify(data)),
});

export {loginAction};
