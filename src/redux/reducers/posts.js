const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isUpdated: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POST_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_POST_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'There is an error at request data',
      };
    }
    case 'GET_POST_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
      };
    }
    //add postingan
    case 'ADD_POST_PENDING': {
      return {
        ...state,
        isLoading: true,
        message: 'loading...',
      };
    }
    case 'ADD_POST_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'access denied',
      };
    }
    case 'ADD_POST_FULFILLED': {
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        message: 'post successfully',
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
