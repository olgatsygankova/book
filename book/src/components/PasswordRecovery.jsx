import React, { Component } from 'react';
import './account.less';
import './password-recovery.less'

export default class PasswordRecovery extends Component {
    handleOpenModal(type) {
        this.props.onHandleChangeModal(type);
    }
    render() {
        return (
            <div id="singup" className={this.props.className}>
                <a href="" title="Закрыть" className="singup__close">X</a>
                <div className="singup__header">Регистрация</div>
                <div className="account">
                    <span className="account__text-recovery-password">Введите Ваш e-mail адрес и на него Вам будет выслан новый пароль </span>
                    <div className="account__email--picture"/>
                    <input className="account__email" name="email" placeholder="Email" />
                    <button className="account__button">Отправить запрос</button>
                    <div className="account__login-with-recover-password" onClick={ () =>  this.handleOpenModal({showLogin:true}) }>Войти</div>
                </div>
            </div>
        );
    }
}

