import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

const store = createStore(applyMiddleware(promiseMiddleware, logger));

export default store;
