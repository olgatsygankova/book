import { history } from '../history';
let base64 = require('base-64');

export const postlogin = (email, password, privatePath) => {
    let body = 'emailPassword=' + base64.encode(email + password);
    return fetch(`/login`, {
        method: 'post',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: body
        })
        .then((response) => response.json())
        .then((responseJson) => {
            localStorage.setItem('token', responseJson.emailPassword);
            localStorage.setItem('id', responseJson.id);
            history.push(privatePath ? privatePath : window.location.pathname);
            return (responseJson)
        })
        .catch((error) => {
            return ({
                errorMessage: 'Неправильный email или пароль'
            })
        });
};

export const checkAuth = () => {
    let token = localStorage.getItem('token');
    return token ? true : false
};

export const logout = () => {
    localStorage.clear();
    history.push('/');
};

