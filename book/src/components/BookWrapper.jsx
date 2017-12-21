import React from 'react';

const BookWrapper = (props) =>  <div className="book__caption-wrapper">
    <span className="book__header">{props.header}</span>
    <span className="book__text">{props.text}</span>
</div>;

export default BookWrapper;