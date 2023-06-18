export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (username, password) => {

  return (dispatch) => {
    // Gửi request đăng nhập, ví dụ: gọi API login
    dispatch({ type: LOGIN_REQUEST });
    // Gửi thông tin đăng nhập đến API
    fetch('api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userName: username, 
          password: password }),
      })
        .then((response) => {
          if (response.ok) {
            // Đăng nhập thành công
            //window.location.href = '/home'; // Chuyển hướng đến trang chủ
            dispatch({ type: LOGIN_SUCCESS, payload: {username} });
          } else {
            // Xử lý lỗi đăng nhập
            //setErrorMessage('Tên đăng nhập hoặc mật khẩu không chính xác.');
            dispatch({ type: LOGIN_FAILURE, error: {} });
          }
        })
        .catch((error) => {
          console.error('Lỗi khi gửi yêu cầu đăng nhập:', error);
          //setErrorMessage('Đã xảy ra lỗi. Vui lòng thử lại sau.');
        });
  };
};

export const logout = () => ({
    type: 'LOGOUT'
});  

// Các action creators khác (ví dụ: logout, setUser) cũng có thể được định nghĩa ở đây
