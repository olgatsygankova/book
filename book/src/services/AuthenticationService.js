import { history } from '../history';
let base64 = require('base-64');

export const postLogin = (email, password, privatePath) => {
    let body =JSON.stringify ({"emailPassword": base64.encode(email + password)});
    return fetch(`/login`, {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: body
        })
        .then((response) => response.json())
        .then((responseJson) => {
            localStorage.setItem('token', responseJson.token);
            localStorage.setItem('id', responseJson.id);
            localStorage.setItem('userName', responseJson.username);
            localStorage.setItem('email', responseJson.email);
            localStorage.setItem('password', base64.encode(responseJson.password));
            history.push(privatePath ? privatePath : window.location.pathname);
            return (responseJson)
        })
        .catch((error) => {
            return ({
                errorMessage: ''
            })
        });
};

export const postSingup = (email, password, privatePath) => {
    let body = JSON.stringify({email: email,
        password: password});
    return fetch(`/singup`, {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: body
    })
        .then((response) => response.json())
        .then((responseJson) => {
            return (responseJson)
        })
        .catch((error) => {
            return ({
                errorMessage: 'error'
            })
        });
};

export const postRecoveryPassword = (email, privatePath) => {
    let body = JSON.stringify({email: email});
    return fetch(`/recovery-password`, {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: body
    })
        .then((response) => response.json())
        .then((responseJson) => {
            return (responseJson)
        })
        .catch((error) => {
            return ({
                errorMessage: 'error'
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

