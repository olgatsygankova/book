const getBookById = (bookId) => {
    return fetch('/book/' + (bookId))
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson
        })
        .catch((error) => {
            console.error(error);
        });
};

export default getBookById;
