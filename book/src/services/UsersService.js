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