import React, { Component } from 'react';
import './account.less';

export default class AccountPasswordRecovery extends Component {
    render() {
        return (
            <div className="account">
                <span className="account__text-recovery-password">Введите Ваш e-mail адрес и на него Вам будет выслан новый пароль </span>
                <input className="account__email" name="email" placeholder="Email" />
                <button className="account__button">Отправить запрос</button>
                <a href="#login" className="account__login-with-recover-password">Войти</a>
            </div>
        );
    }
}
