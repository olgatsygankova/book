export const getBooks = () => {
    return fetch('/books')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson
        })
        .catch((error) => {
            console.error(error);
        });
};

export const getBookById = (bookId) => {
    return fetch(`/book/${bookId}` )
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson
        })
        .catch((error) => {
            console.error(error);
        });
};

export const getBookTextById = (bookId) => {
    return fetch(`/read/${bookId}` )
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson
        })
        .catch((error) => {
            console.error(error);
        });
};

export const totalEstimate = (estimate) => {
    if (!estimate) return 0;
    let valueTotal = 0;
    estimate.map(valueEstimate => {
        return (
            valueTotal += valueEstimate.estimate
        );
    });
    return (
        Math.round(valueTotal / estimate.length)
    );
};

