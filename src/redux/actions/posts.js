import http from '../../helpers/http';

const getPost = (token) => ({
  type: 'GET_POST',
  payload: http(token).get('post'),
});

export {getPost};
