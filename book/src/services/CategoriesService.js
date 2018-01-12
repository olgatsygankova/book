export const getCategories = (text) => {
    if(typeof text === "undefined") {
        return fetch('/categories')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson
            })
            .catch((error) => {
                console.error(error);
            });
    } else {
        return fetch(`/search/${text}`)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson
            })
            .catch((error) => {
                console.error(error);
            });
    }
};

export const getCategoryById = (categoryId, text) => {
    if(typeof text === "undefined") {
        return fetch(`/category/${categoryId}`)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson
            })
            .catch((error) => {
                console.error(error);
            });
    } else {
        return fetch(`/${text}/category/${categoryId}`)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson
            })
            .catch((error) => {
                console.error(error);
            });
    }
};

