const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(loginFormEl);
    formData.get('email');
    formData.get('password');
    const userInfo = Object.fromEntries(formData);


    if (userInfo.email.trim() === '' || userInfo.password.trim() === '') {
        alert('All form fields must be filled in');
    } else {
        console.log(userInfo);
        loginFormEl.reset();
    }
}
);

