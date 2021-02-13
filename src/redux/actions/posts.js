import http from '../../helpers/http';

const getPost = (token) => ({
  type: 'GET_POST',
  payload: http(token).get('post'),
});
const addPost = (token, data) => ({
  type: 'ADD_POST',
  payload: http(token).get('post', data),
});

export {getPost, addPost};
