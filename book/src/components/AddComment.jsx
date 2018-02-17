import React, { Component } from 'react';
import './add-comment.less';
import {getUserIdlocalStorage} from "../services/UsersService";
import {checkAuth} from "../services/AuthenticationService";

export default class AddComment extends Component {

    onClickAddComment (e){
        const {addNewComment, bookid, myCommentText} = this.props;
        const userid = getUserIdlocalStorage();
        const nowDate = new Date();
        const nowDay = String (nowDate.getDate());
        const nowMonth = String (nowDate.getMonth());
        const dateComment = ((nowDay.length < 2 ? '0' + nowDay: nowDay) + '.' + (nowMonth.length < 2 ? '0' + nowMonth: nowMonth) + '.' + nowDate.getFullYear() + ' ' + nowDate.getHours()+ ':' + nowDate.getMinutes());
        if (myCommentText === "") {}
        else {
            if (checkAuth()) {
                addNewComment(userid, bookid, myCommentText, dateComment)
            } else {
                let path = e.target.pathname;
                e.preventDefault();
                this.props.showModal({showLogin: true, privatePath: path});
            }
        }
    }

    render() {
        const {changeComment, myCommentText} = this.props;
        return (
            <form className="add-comment">
                <span className="add-comment__header">Комментарии:</span>
                <textarea name="add-comment" className="add-comment__text" value={ myCommentText } onChange={changeComment} required/>
                <button className="add-comment__button-send" onClick={(e)=> this.onClickAddComment(e)}>Добавить комментарий</button>
            </form>
        );
    };
}
