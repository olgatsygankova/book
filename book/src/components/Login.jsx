import React, { Component } from 'react';
import './account.less';
import './login.less'

export default class Login extends Component {
    render() {
        console.log(this.props);
        const {className, onBtnClickHandler} = this.props;
        const {emailValueLogin, passwordValueLogin, error} = this.props.auth;
        const {changeEmailLogin, changePasswordLogin, showModal} = this.props.authActions;
        return (
            <div id="login" className={className}>
                <div className="login__header">Вход</div>
                <form className="account" onSubmit={onBtnClickHandler}>
                    <div className="account__email--picture"/>
                    <input className="account__email" name="email" placeholder="Email" type="email" value={ emailValueLogin } onChange={(e) => changeEmailLogin(e.target.value) } required />
                    <div className="account__password--picture"/>
                    <input className="account__password" name="password" placeholder="Password" type="password" value={ passwordValueLogin } onChange={(e) => changePasswordLogin(e.target.value) } required />
                    {error ? <div className="account__error"> {error} </div> : <div className="account__error"></div>}
                    <button className="account__button" type = "submit">Войти</button>
                    <div className="account__create-account" onClick={ () => showModal({showSignup: true})} >Создать аккаунт</div>
                    <a href="" title="Закрыть" className="login__close">X</a>
                </form>
            </div>
        );
    }
}


