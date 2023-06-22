import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (username, password, navigateToHome) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
      const response = await axios.post('https://localhost:7263/api/User/login', {
        userName: username,
        password: password,
      });

      if (response.status === 200) {
        // Đăng nhập thành công
        const uidResponse = await axios.post(
          `https://localhost:7263/api/User/${username}/getUserIdByUserName`
        );
        const uid = await uidResponse.data;
        const user = { username, uid };

        // Lưu thông tin đăng nhập vào localStorage
        localStorage.setItem('user', JSON.stringify(user));

        dispatch({ type: LOGIN_SUCCESS, payload: user });
        toast.success('Đăng nhập thành công', {
          autoClose: 2500, // Đóng sau 2 giây
        });
        navigateToHome();
      } else {
        // Xử lý lỗi đăng nhập
        dispatch({ type: LOGIN_FAILURE, error: {} });
        toast.error('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập.',{
          autoClose: 2500, // Đóng sau 2 giây
        });
      }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu đăng nhập:', error);
      // Xử lý lỗi và dispatch action LOGIN_FAILURE
      dispatch({ type: LOGIN_FAILURE, error: error });
      // Hiển thị popup thông báo lỗi
      toast.error('Lỗi khi gửi yêu cầu đăng nhap.',{
        autoClose: 2500, // Đóng sau 2 giây
      });
    }
  };
};

export const logout = () => {
  // Xóa thông tin đăng nhập khỏi localStorage
  localStorage.removeItem('user');

  return { type: 'LOGOUT' };
};
