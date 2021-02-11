import http from '../../helpers/http';

const getPost = (token) => ({
  type: 'GET_NEWS',
  payload: http(token).get('news/?sort[createdAt]=desc'),
});

export {getPost};
