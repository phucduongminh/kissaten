export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (username, password, navigateToHome) => {
  return (dispatch) => {
    // Gửi request đăng nhập, ví dụ: gọi API login
    dispatch({ type: LOGIN_REQUEST });
    // Gửi thông tin đăng nhập đến API
    fetch('https://localhost:7263/api/User/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userName: username, 
          password: password }),
      })
        .then((response) => {
          if (response.status === 200) {
            // Đăng nhập thành công
            console.log("Login OK");
            dispatch({ type: LOGIN_SUCCESS, payload: {username} });
            navigateToHome();
          } else {
            // Xử lý lỗi đăng nhập
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
