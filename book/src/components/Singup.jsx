import React, { Component } from 'react';
import './account.less';
import './singup.less'

export default class Singup extends Component {

    handleOpenLogin(type) {
        this.props.onHandleChangeModal(type);
    }
    render() {
        return (
            <div id="singup" className={this.props.className}>
                <a href="" title="Закрыть" className="singup__close">X</a>
                <div className="singup__header">Регистрация</div>
                <form className="account">
                    <div className="account__email--picture"/>
                    <input className="account__email" name="email" placeholder="Email" />
                    <div className="account__password--picture"/>
                    <input className="account__password" type="password" name="password" placeholder="Password" />
                    <button className="account__button">Создать аккаунт</button>
                    <span className="account__login-with-singup" onClick={ () => this.handleOpenLogin({showLogin:true})}>Войти</span>
                    <span className="account__text">если у вас уже есть аккаунт</span>
                </form>
            </div>
        );
    }
}