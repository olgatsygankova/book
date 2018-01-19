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
    let userId = localStorage.getItem('id');
    return userId
};