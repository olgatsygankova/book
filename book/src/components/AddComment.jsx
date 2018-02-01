import React, { Component } from 'react';
import './add-comment.less';

export default class AddComment extends Component {
    render() {
        const myCommentText=this.props.myCommentText;
        return (
            <div className="add-comment">
                <span className="add-comment__header">Комментарии:</span>
                <textarea name="add-comment" className="add-comment__text" value={ myCommentText } onChange={this.props.changeComment} required/>
                <button className="add-comment__button-send" onClick={()=> {this.props.addComment}}>Добавить комментарий</button>
            </div>
        );
    };
}