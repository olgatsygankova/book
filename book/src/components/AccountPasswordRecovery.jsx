import React, { Component } from 'react';
import './account.less';
import {Login} from '../containers/Login';

export default class AccountPasswordRecovery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'login'
        };
    }
    handleChangeClass(className) {
        this.setState({
            className: className
        });
    }
    render() {
        return (
            <div className="account">
                <span className="account__text-recovery-password">Введите Ваш e-mail адрес и на него Вам будет выслан новый пароль </span>
                <input className="account__email" name="email" placeholder="Email" />
                <button className="account__button">Отправить запрос</button>
                <div className="account__login-with-recover-password" onClick={ () => this.handleChangeClass("login login--active") }>Войти</div>

            </div>
        );
    }
}
/*

 {(this.state.className === "login" ) ?
                    <Login className="login"/> : <Login className={this.state.className}/>}

 */


