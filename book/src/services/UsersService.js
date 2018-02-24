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

export const postUpdateOffice = (userid, username, email, password) => {
    let body = JSON.stringify({userid: userid,
        username: username,
        email: email,
        password: password
    });
    return fetch(`/user/update`, {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: body
    })
        .then((response) => response.json())
        .then((responseJson) => {
            localStorage.setItem('token', responseJson.emailpassword);
            localStorage.setItem('userName', responseJson.username);
            localStorage.setItem('email', responseJson.email);
            localStorage.setItem('password', base64.encode(responseJson.password));
            return (responseJson)
        })
        .catch((error) => {
            return ({
                errorMessage: 'error'
            })
        });
};

export const getUserIdlocalStorage = () => {
    let userId = localStorage.getItem('id');
    return userId
};

export const getUserNamelocalStorage = () => {
    let userName = localStorage.getItem('userName');
    return userName
};

export const getUserlocalStorage = () => {
    let userName = localStorage.getItem('userName');
    let email = localStorage.getItem('email');
    let password = base64.decode(localStorage.getItem('password'));
    return  {'userName': userName, 'email': email, 'password': password};
};