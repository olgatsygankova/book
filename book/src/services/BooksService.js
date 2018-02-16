import { getUserIdlocalStorage } from "./UsersService";

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

export const getCommentsBook = (bookId) => {
    return fetch(`/comments/${bookId}` )
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

export const putAddComment = (bookId, user, date, text) => {
    let body = JSON.stringify({user: user,
        date: date,
        text: text
    });
    return fetch(`/book/${bookId}/add-comment`, {
        method: 'put',
        headers: {
            "Content-type": "application/json"
        },
        body: body
    })
        .then((response) => response.json())
        .then((responseJson) => {
            return (responseJson)
        })
        .catch((error) => {
            return ({
                errorMessage: 'error'
            })
        });
};

export const totalEstimate = (estimate) => {
    if (!estimate || estimate[0] === null) return 0;
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

export const putEstimateForBook = (bookId, estimateValue) => {
    let userid = getUserIdlocalStorage();
    let body = JSON.stringify({userid: userid,
        estimate: estimateValue,
        bookid: bookId
    });
    return fetch(`/book/stars`, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: body
    })
        .then((response) => response.json())
        .then((responseJson) => {
            return (responseJson)
        })
        .catch((error) => {
            console.error(error);
        });
};

export const myEstimate = (estimate) => {
    if (!estimate) return 0;
    const currentUserId = getUserIdlocalStorage();
    let myEstimateValue = 0;
    estimate.filter(estimate => {
       return estimate.user_id == currentUserId ? myEstimateValue = estimate.estimate : 0
    });
    return (
       myEstimateValue
    );
};
