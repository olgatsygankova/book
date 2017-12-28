const getCategoryById = (categoryId) => {
    return fetch('/category/' + (categoryId))
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson
        })
        .catch((error) => {
            console.error(error);
        });
};

export default getCategoryById;
