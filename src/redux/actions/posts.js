import http from '../../helpers/http';

const getPost = (token) => ({
  type: 'GET_POST',
  payload: http(token).get('post'),
});
const addPost = (token, data) => ({
  type: 'ADD_POST',
  payload: http(token).post('post', data),
});
const getComment = (token, id) => ({
  type: 'GET_COMMENT',
  payload: http(token).get(`post/comment/${id}`),
});

export {getPost, addPost, getComment};
