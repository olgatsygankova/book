let base64 = require('base-64');

export const getUserById = (userId) => {
    return fetch(`/user/${userId}` )
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson
        })
        .catch((error) => {
            console.error(error);
        });
};

export const getUserIdlocalStorage = () => {
    let userId = Number(localStorage.getItem('id'));
    return userId
};

export const getUserNamelocalStorage = () => {
    let userName = localStorage.getItem('userName');
    return userName
};

export const getUserlocalStorage = () => {
    let userLocalStorage = {};
    let userName = localStorage.getItem('userName');
    let email = localStorage.getItem('email');
    let password = base64.decode(localStorage.getItem('password'));
    return  userLocalStorage = {'userName': userName, 'email': email, 'password': password};
};