import React, { Component } from 'react';
import './add-comment.less';

export default class AddComment extends Component {
    render() {
        return (
            <div className="add-comment">
                <span className="add-comment__header">Комментарии:</span>
                <textarea name="add-comment" className="add-comment__text"></textarea>
                <button className="add-comment__button-send">Добавить комментарий</button>
            </div>
        );
    };
}