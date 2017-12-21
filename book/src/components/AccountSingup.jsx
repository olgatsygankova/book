import React, { Component } from 'react';
import './account.less';

export default class AccountSingup extends Component {
    render() {
        return (
            <div className="account">
                <input className="account__email" name="email" placeholder="Email" />
                <input className="account__password" type="password" name="password" placeholder="Password" />
                <button className="account__button">Создать аккаунт</button>
                <a href="#login" className="account__login-with-singup">Войти</a>
                <span className="account__text">если у вас уже есть аккаунт</span>
            </div>
        );
    }
}
