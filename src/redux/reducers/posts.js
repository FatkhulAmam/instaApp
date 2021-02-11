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
