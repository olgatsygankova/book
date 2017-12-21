import React, { Component } from 'react';
import './account.less';

export default class AccountLogin extends Component {
    render() {
        return (
            <div className="account">
                <input className="account__email" name="email" placeholder="Email"/>
                <input className="account__password" type="password" name="password" placeholder="Password"/>
                <button className="account__button">Войти</button>
                <a href="#password-recovery" className="account__forget-password">Забыли пароль?</a>
                <a href="#singup" className="account__create-account">Создать аккаунт</a>
            </div>
        );
    }
}
