export const getCategories = (text) => {
    if(!text) {
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
    if(!text) {
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

export const getCategoriesName = () => {
    return fetch(`/categories-name` )
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson
        })
        .catch((error) => {
            console.error(error);
        });
};