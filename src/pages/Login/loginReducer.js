import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './loginActions';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Kiểm tra nếu có thông tin đăng nhập trong localStorage, khôi phục trạng thái đăng nhập
const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
if (userFromLocalStorage) {
  initialState.user = userFromLocalStorage;
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.error,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default loginReducer;
