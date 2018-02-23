export const getSearchTitle = (text) => {
    return fetch(`/search/title/${text}` )
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson
        })
        .catch((error) => {
            console.error(error);
        });
};

export const getSearchAuthor = (text) => {
    return fetch(`/search/author/${text}` )
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson
        })
        .catch((error) => {
            console.error(error);
        });
};

export const getSearchIsbn = (text) => {
    return fetch(`/search/isbn/${text}` )
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson
        })
        .catch((error) => {
            console.error(error);
        });
};

export const getSearchFull = (text) => {
    return fetch(`/search/full/${text}` )
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson
        })
        .catch((error) => {
            console.error(error);
        });
};